import React from "react";

// Import images
import AntioxidantsImage from "../images/thumbnail_antioxidents.png";
import CerealsStarchyImage from "../images/thumbnail_cereals & starchy.png";
import DietaryFiberImage from "../images/thumbnail_dietary fiber.png";
import FolateImage from "../images/thumbnail_folate.png";
import FruitsVegetablesImage from "../images/thumbnail_fruits & veges.png";
import IronImage from "../images/thumbnail_iron.png";
import NutsOilsImage from "../images/thumbnail_nuts & oils.png";
import ServingSizeFruitsVegetablesImage from "../images/thumbnail_serving size fruits & veges.png";
import ServingSizesImage from "../images/thumbnail_serving sizes.png";

const AddtionalPage = () => {
  const styles = {
    root: {
      flexGrow: 1,
      padding: "25px", // You can adjust the spacing as needed
    },
    card: {
      maxWidth: "450px",
      margin: "16px", // You can adjust the margin as needed
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a simple box shadow
      borderRadius: "8px", // Add border radius
    },
    media: {
      height: "400px",
      objectFit: "cover", // Ensure the image covers the entire space
      borderRadius: "8px 8px 0 0", // Add border radius to the top corners
    },
    heading: {
      fontSize: "1.5rem",
      marginBottom: "8px",
    },
    body: {
      fontSize: "1rem",
      color: "rgba(0, 0, 0, 0.6)",
    },
  };

  const images = [
    { name: "Antioxidants", path: AntioxidantsImage },
    { name: "Cereals & Starchy", path: CerealsStarchyImage },
    { name: "Dietary Fiber", path: DietaryFiberImage },
    { name: "Folate", path: FolateImage },
    { name: "Fruits & Vegetables", path: FruitsVegetablesImage },
    { name: "Iron", path: IronImage },
    { name: "Nuts & Oils", path: NutsOilsImage },
    {
      name: "Serving Size Fruits & Vegetables",
      path: ServingSizeFruitsVegetablesImage,
    },
    { name: "Serving Sizes", path: ServingSizesImage },
  ];

  return (
    <div style={styles.root}>
      <h4 style={styles.heading}>Additional Nutrition Info </h4>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div key={index} style={styles.card}>
            <img src={image.path} alt={image.name} style={styles.media} />
            <div>
              <div style={styles.heading}>{image.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddtionalPage;
