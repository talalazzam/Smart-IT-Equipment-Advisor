import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const [equipment, setEquipment] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    category: "Networking",
    description: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/login");
    } else {
      loadEquipment();
    }
  }, [navigate]);

  const loadEquipment = async () => {
    try {
      const response = await axios.get("http://localhost:5000/equipment");
      setEquipment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const clearForm = () => {
    setEditing(false);

    setForm({
      id: "",
      name: "",
      category: "Networking",
      description: "",
      image: "",
    });

    setSelectedImage(null);
  };

  const addEquipment = async () => {
    if (
      form.name === "" ||
      form.category === "" ||
      form.description === "" ||
      !selectedImage
    ) {
      alert("Please complete all fields.");
      return;
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("image", selectedImage);

    try {
      await axios.post("http://localhost:5000/equipment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      loadEquipment();
      clearForm();

      alert("Equipment added successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  const editEquipment = (item) => {
    setEditing(true);

    setForm({
      id: item.id,
      name: item.name,
      category: item.category,
      description: item.description,
      image: item.image,
    });

    setSelectedImage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateEquipment = async () => {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("description", form.description);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await axios.put(`http://localhost:5000/equipment/${form.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      loadEquipment();
      clearForm();

      alert("Equipment updated successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEquipment = async (id) => {
    const confirmDelete = window.confirm("Delete this equipment?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/equipment/${id}`);

      loadEquipment();

      alert("Equipment deleted successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");

    navigate("/login");
  };
  return (
    <div className="adminContainer">
      <div className="adminHeader">
        <h1>Admin Panel</h1>

        <button className="logoutButton" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="adminCard">
        <h2>{editing ? "Update Equipment" : "Add Equipment"}</h2>

        <input
          type="text"
          name="name"
          placeholder="Equipment Name"
          value={form.name}
          onChange={handleChange}
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option>Networking</option>
          <option>Security</option>
          <option>Storage</option>
          <option>Power</option>
          <option>Server</option>
        </select>

        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {editing && form.image && (
          <p>
            Current Image: <strong>{form.image}</strong>
          </p>
        )}

        <div className="buttonGroup">
          {!editing ? (
            <button className="addButton" onClick={addEquipment}>
              Add Equipment
            </button>
          ) : (
            <button className="updateButton" onClick={updateEquipment}>
              Update Equipment
            </button>
          )}

          <button className="clearButton" onClick={clearForm}>
            Clear
          </button>
        </div>
      </div>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {equipment.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.name}</td>

                <td>{item.category}</td>

                <td>{item.description}</td>

                <td>{item.image}</td>

                <td>
                  <button
                    className="editButton"
                    onClick={() => editEquipment(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="deleteButton"
                    onClick={() => deleteEquipment(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
