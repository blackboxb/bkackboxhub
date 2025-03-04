import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyState from "./context/myState";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

// Lazy loading pages
const HomePage = lazy(() => import("./pages/home/HomePage"));
const NoPage = lazy(() => import("./pages/noPage/NoPage"));
const ProductInfo = lazy(() => import("./pages/productInfo/ProductInfo"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const AllProduct = lazy(() => import("./pages/allProduct/AllProduct"));
const Signup = lazy(() => import("./pages/registration/Signup"));
const Login = lazy(() => import("./pages/registration/Login"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AddProductPage = lazy(() => import("./pages/admin/AddProductPage"));
const UpdateProductPage = lazy(() => import("./pages/admin/UpdateProductPage"));
const CategoryPage = lazy(() => import("./pages/category/CategoryPage"));

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <MyState>
      <Router>
        <ScrollTop />
        <button
          className="fixed top-5 right-5 p-2 bg-gray-800 text-white rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
        </Suspense>
        <Toaster />
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;
