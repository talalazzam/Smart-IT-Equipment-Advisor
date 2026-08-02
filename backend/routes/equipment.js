const express = require("express");
const router = express.Router();
const db = require("../db");
const upload = require("../middleware/upload");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM equipment";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Failed to retrieve equipment.",
      });
    }

    res.json(results);
  });
});

router.post("/", upload.single("image"), (req, res) => {
  const { name, category, description } = req.body;

  if (!name || !category || !description) {
    return res.status(400).json({
      message: "Please complete all required fields.",
    });
  }

  if (!req.file) {
    return res.status(400).json({
      message: "Please upload an equipment image.",
    });
  }

  const image = req.file.filename;

  const sql =
    "INSERT INTO equipment (name, category, description, image) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, category, description, image], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Failed to add equipment.",
      });
    }

    res.status(201).json({
      message: "Equipment added successfully.",
    });
  });
});

router.put("/:id", upload.single("image"), (req, res) => {
  const { name, category, description } = req.body;
  const id = req.params.id;

  if (!name || !category || !description) {
    return res.status(400).json({
      message: "Please complete all required fields.",
    });
  }

  const checkSql = "SELECT * FROM equipment WHERE id=?";

  db.query(checkSql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error.",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Equipment not found.",
      });
    }

    if (req.file) {
      const image = req.file.filename;

      const sql =
        "UPDATE equipment SET name=?, category=?, description=?, image=? WHERE id=?";

      db.query(sql, [name, category, description, image, id], (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Failed to update equipment.",
          });
        }

        res.json({
          message: "Equipment updated successfully.",
        });
      });
    } else {
      const sql =
        "UPDATE equipment SET name=?, category=?, description=? WHERE id=?";

      db.query(sql, [name, category, description, id], (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Failed to update equipment.",
          });
        }

        res.json({
          message: "Equipment updated successfully.",
        });
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const checkSql = "SELECT * FROM equipment WHERE id=?";

  db.query(checkSql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error.",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Equipment not found.",
      });
    }

    const deleteSql = "DELETE FROM equipment WHERE id=?";

    db.query(deleteSql, [id], (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Failed to delete equipment.",
        });
      }

      res.json({
        message: "Equipment deleted successfully.",
      });
    });
  });
});

module.exports = router;
