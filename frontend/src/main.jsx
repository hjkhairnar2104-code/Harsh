import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Bookings from "./components/Bookings.jsx";
import ContactUs from "./components/ContactUs.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import EquipmentPage from "./pages/EquipmentPage.jsx";
import AdminAddProduct from "./pages/AdminAddProduct.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";
import BookNow from "./components/BookNow.jsx";
import PaymentSuccess from "./components/Payment.jsx";
import LogIn from "./components/Login.jsx";
import Register from "./components/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Equipments", element: <EquipmentPage /> },
      { path: "/Bookings", element: <Bookings /> },
      { path: "/Contactus", element: <ContactUs /> },
      {
        path: "/admin/add-product",
        element: (
          <ProtectedRoute role="ADMIN">
            <AdminAddProduct />
          </ProtectedRoute>
        ),
      },
      {path:"/book/:id", element:<BookNow />},
      {path:"/payment-success", element:<PaymentSuccess/>},
      {path:"/Add-Equipment", element:<AdminAddProduct/>},
      {path:"/login", element:<LogIn/>},
      {path:"/register", element:<Register/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
