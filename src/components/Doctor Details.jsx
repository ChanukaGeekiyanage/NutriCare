import React from "react";
import Typography from "@mui/material/Typography";

import Doctor1Photo from "../images/d1.jpg";
import Doctor2Photo from "../images/d2.jpeg";
import Doctor1Cert from "../images/Nutri Cer.jpg";
import Doctor2Cert from "../images/Sul.png";

const MedicalAdvisorsPage = () => {
  return (
    <div style={{ background: "green", padding: "250px", color: "white" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Details of the Medical Experts Involved
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 2fr))",
          gap: "450px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={Doctor1Photo}
            alt="Doctor 1"
            style={{
              width: "450px",
              height: "550px",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
          />
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Dr. GRNN Waidyarathna
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
            Registered Dietician & Nutrition /Lecturer at Bio Chemistry
          </Typography>

          <img
            src={Doctor1Cert}
            alt="Doctor 1 Certificate"
            style={{ width: "320px", height: "520px", marginTop: "10px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={Doctor2Photo}
            alt="Doctor 2"
            style={{
              width: "450px",
              height: "550px",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
          />
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Dr. PS Madumali
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
            General Physician at Walasmulla hospital
          </Typography>

          <img
            src={Doctor2Cert}
            alt="Doctor 2 Certificate"
            style={{ width: "620px", height: "520px", marginTop: "10px" }}
          />
        </div>
        {/* Add more advisors as needed */}
      </div>
    </div>
  );
};

export default MedicalAdvisorsPage;
