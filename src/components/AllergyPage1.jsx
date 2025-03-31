import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";

const AllergyPage1 = () => {
  const [allergies, setAllergies] = useState("");
  const [response, setResponse] = useState("");

  const handleAllergySubmit = async () => {
    try {
      const response = await fetch("http://localhost:8001/send-message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { text: allergies } }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error submitting allergies:", errorData);
        setResponse(
          "System Donot Have Info regarding ur allergic food or you donot have allergic food"
        );
        return;
      }

      if (allergies) {
        const data = await response.json();
        setResponse(JSON.stringify(data.message));
        console.log("Status:", data.message);
      } else {
      }
    } catch (error) {
      console.error("Error submitting allergies:", error);
    }
  };

  return (
    <Container
      component="main"
      style={{ alignItems: "center", marginTop: "50px" }}
    >
      <Paper
        style={{
          backgroundColor: "green",
          padding: "80px",
          width: "100%",
          height: "150%",
        }}
      >
        <Typography variant="h4" style={{ color: "white" }}>
          Food Suggestions
        </Typography>

        <TextField
          label="Enter the food you are allergic / not prefered"
          variant="filled"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          style={{ marginTop: "10px", width: "100%", background: "white" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAllergySubmit}
          style={{
            marginLeft: "310px",
            marginTop: "10px",
            width: "20%",
            background: "White",
            color: "black",
          }}
        >
          Submit my allergies
        </Button>

        <div style={{ marginTop: "20px", color: "white", overflowX: "No" }}>
          <>
            <strong>What You can Eat Instead</strong>
            <pre>
              {response.split(",").map((item, index) => (
                <div key={index}>
                  {item.replace(/[^a-zA-Z0-9\s]/g, "").trim()}
                </div>
              ))}
            </pre>
          </>
        </div>
      </Paper>
    </Container>
  );
};

export default AllergyPage1;
