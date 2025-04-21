import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./pages/Login.tsx"
import Signup from "./pages/Signup.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import ChooseDefaultLinkCategory from "./pages/ChooseDefaultLinkCategory.tsx"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="choose-default-category"
          element={<ChooseDefaultLinkCategory />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
