import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// import { Home } from "../Pages/Home";
// import LoadingSpinner from "../components/LoadinSpinner/LoadingSpinner";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Layout from "./Layout";
// import ControlPanel from "./ControlPanel";
// import Dashboard from "../Admin_page/Dashboard";
const HomePage = lazy(() => import("../Pages/Home"));
// const Admin = lazy(() => import("../Admin_page/Admin"));
const Product = lazy(() => import("../Pages/Products"));
const LogIn = lazy(() => import("../Pages/Login"));
const Payment = lazy(() => import("../Pages/Payment"));
const InfoProduct = lazy(() => import("../Pages/InfoProduct"));
const Contact = lazy(() => import("../Pages/Contact"));
const Dashboard = lazy(() => import("../Admin_page/Dashboard"));
const AllProduct = lazy(() => import("../Admin_page/AllProducts"));
const ProductPrice = lazy(() => import("../Admin_page/ProductsPrice"));
const OrderTable = lazy(() => import("../Admin_page/OrderTable"));

const Routers = () => (
  <Router>
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LogIn />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}>
        <Route
          index
          element={
            <Navigate
              replace
              to="/dashboard"
            />
          }
        />
        <Route
          path="/dashboard/all-products"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AllProduct />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/order"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OrderTable />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/products"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductPrice />
            </Suspense>
          }
        />
      </Route>

      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
        />
        {/* <Route
          path="/admin"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Admin />
            </Suspense>
          }
        /> */}
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
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>

    {/* <Footer /> */}
  </Router>
);

export default Routers;
