import React, { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import logo from "../images/Newlogo.png";
import jsPDF from "jspdf";
import signature from "../images/signature.png";
import FeedbackForm from "./Feedback";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./RecommendationPage.css";

function RecommendationPage() {
  const { globalArray } = useGlobalContext();
  const [receivedMessage, setReceivedMessage] = useState("");
  const [isPDFButtonDisabled, setPDFButtonDisabled] = useState(true);

  /*const [isPDFButtonDisabled, setPDFButtonDisabled] = useState(true);*/
  const sendMessage = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/send-and-receive-message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: "User", text: globalArray.join(",") }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Message sent and received successfully:", data.message);
        setReceivedMessage(data.message);
        setPDFButtonDisabled(false);
      } else {
        console.error("Failed to send the message");
      }
    } catch (error) {
      console.error("Error sending the message:", error);
    }
  };

  const convertToPDFAndDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      lineHeight: 1.4,
    });

    doc.setTextColor(0, 100, 0);
    doc.setFontSize(14);
    const imgData = logo;
    doc.addImage(imgData, "PNG", 10, -10, 80, 60);
    doc.text(150, 22, "DIET PRESCRIPTION", { fontSize: 50 });
    const textLines = doc.splitTextToSize(
      receivedMessage.replace(/[•]/g, ""),
      250
    );
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(10, 50, textLines);

    const signatureY = 250;
    const dottedLineY = signatureY + 20;
    const doctorNameY = dottedLineY + 10;
    const currentDateY = doctorNameY + 10;
    const signatureImg = signature;
    doc.addImage(signatureImg, "PNG", 10, signatureY, 40, 20);

    doc.setLineWidth(0.5);
    doc.setDrawColor(0, 0, 0);
    doc.line(10, dottedLineY, 50, dottedLineY);

    const doctorName = "Dr.Nipuni Waidyarathna";
    const currentDate = new Date().toLocaleString();
    doc.text(10, doctorNameY, doctorName);
    doc.text(10, currentDateY, currentDate);

    doc.save("My Dietary Prescription.pdf");
  };

  return (
    <div className="recommendation-page">
      <div className="content">
        <div className="centered">
          <Typography
            variant="h4"
            style={{ color: "black", marginBottom: "60px" }}
          >
            Diet Recommendation Page
          </Typography>
        </div>

        <div className="centered">
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            style={{ marginTop: "20px", background: "white", color: "black" }}
          >
            Send my Form Responses to Nutricare
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={convertToPDFAndDownload}
            style={{
              marginTop: "20px",
              background: "white",
              color: "black",
              opacity: isPDFButtonDisabled ? 0.5 : 1,
            }}
            disabled={isPDFButtonDisabled}
          >
            Get My Personalized Diet Prescription
          </Button>
        </div>

        <div className="centered">
          <a
            href="/genderQuestion"
            className="navigation-buttonr"
            style={{ marginTop: "20px", background: "white", color: "black" }}
          >
            CHANGE PERSONAL DATA
          </a>
        </div>
        <div className="centered">
          <a
            href="/foodSuggestion"
            className="navigation-buttonr"
            style={{ marginTop: "20px", background: "white", color: "black" }}
          >
            GET FOOD SUGGESTIONS FOR THE FOOD THAT I HAVE ALLERGIES
          </a>
        </div>
        <div className="centered">
          <div className="centered">
            <a
              href="/AddtionalInfo"
              className="navigation-buttonr"
              style={{ marginTop: "20px", background: "white", color: "black" }}
            >
              LEARN MORE ABOUT NUTRIENTS
            </a>
          </div>
          <div className="centered">
            <a
              href="/DoctorDetails"
              className="navigation-buttonr"
              style={{ marginTop: "20px", background: "white", color: "black" }}
            >
              DETAILS ABOUT MEDICAL ADVISORS INVOLVED
            </a>
          </div>
          <img src={logo} alt="Logo" style={{ marginTop: "20px" }} />
        </div>

        <FeedbackForm />
      </div>
    </div>
  );
}

export default RecommendationPage;
