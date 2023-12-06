import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import { Home } from "../Pages/Home";
import LoadingSpinner from "../components/LoadinSpinner/LoadingSpinner";
import Layout from "./Layout";
const HomePage = lazy(() => import("../Pages/Home"));
const Admin = lazy(() => import("../Admin_page/Admin"));
const Product = lazy(() => import("../Pages/Products"));
const LogIn = lazy(() => import("../Pages/Login"));
const Payment = lazy(() => import("../Pages/Payment"));
const InfoProduct = lazy(() => import("../Pages/InfoProduct"));

const Routers = () => (
  <Router>
    {/* <Header /> */}

    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LogIn />
          </Suspense>
        }
      />
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Admin />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Product />
            </Suspense>
          }
        />

        <Route
          path="/payment"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Payment />
            </Suspense>
          }
        />
        <Route
          path="/infoproduct"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <InfoProduct />
            </Suspense>
          }
        />
      </Route>
    </Routes>

    {/* <Footer /> */}
  </Router>
);

export default Routers;
