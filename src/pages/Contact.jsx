import React from "react";

const Contact = () => {
  return (
    <div className="pageContainer">
      <h1>Contact Us</h1>

      <p>
        If you have any questions or need assistance selecting IT equipment,
        feel free to contact us.
      </p>

      <div className="infoGrid">
        <div className="infoCard">
          <h2>📧 Email</h2>
          <p>support@itadvisor.com</p>
        </div>

        <div className="infoCard">
          <h2>📞 Phone</h2>
          <p>+961 70 123 456</p>
        </div>

        <div className="infoCard">
          <h2>📍 Address</h2>
          <p>Beirut, Lebanon</p>
        </div>

        <div className="infoCard">
          <h2>🕒 Working Hours</h2>
          <p>
            Monday - Friday
            <br />
            9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
