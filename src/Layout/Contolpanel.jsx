import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/LoadinSpinner/LoadingSpinner";

const AddProduct = lazy(() => import("../Admin_page/AddProduct"));
const AllPRoduct = lazy(() => import("../Admin_page/AllProducts"));
const Dashboard = lazy(() => import("../Admin_page/Dashboard"));

const ControlPanel = () => {
  <Router>
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        }
      />
    </Routes>
  </Router>;
};

export default ControlPanel;
