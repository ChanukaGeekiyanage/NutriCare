import React from "react";
import ReactDOM from "react-dom/client";
//import {Route } from "react-router-dom";
import App from "./App";

import GQ from "./components/GenderQuestion";
import BQ from "./components/BMIQuestion";
import BSQ from "./components/BloodSugarLevelQuestion";
import BPQ from "./components/BloodPressureLevelPage";
import BCQ from "./components/BloodCholesterolLevelPage";
import AL from "./components/ActitivityLevelQuestion";
import R from "./components/RecommendationPage";
import FP from "./components/FoodPreferencePage";
import AD from "./components/Addtional Info";
import A1 from "./components/AllergyPage1";
import "./index.css";
import MA from "./components/Doctor Details";
import { GlobalProvider } from "./GlobalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/genderQuestion",
    element: <GQ />,
  },
  {
    path: "/BMIQuestion",
    element: <BQ />,
  },
  {
    path: "/BSQuestion",
    element: <BSQ />,
  },
  {
    path: "/BPQuestion",
    element: <BPQ />,
  },
  {
    path: "/BCQuestion",
    element: <BCQ />,
  },
  {
    path: "/ActivityLevelQ",
    element: <AL />,
  },
  {
    path: "/FoodPreferenceQ",
    element: <FP />,
  },
  {
    path: "/recommendation",
    element: <R />,
  },

  {
    path: "/foodSuggestion",
    element: <A1 />,
  },
  {
    path: "/AddtionalInfo",
    element: <AD />,
  },
  {
    path: "/DoctorDetails",
    element: <MA />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
