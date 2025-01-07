import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationProvider from "./components/context/AuthenticationProvider.jsx";
import axios from "axios";

//axios 인터셉터 설정
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  console.log("token?", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

const router = createBrowserRouter([{}]);

function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  );
}
