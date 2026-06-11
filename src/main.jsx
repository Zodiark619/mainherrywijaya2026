import { createRoot } from "react-dom/client";
import Freelancer from "./pages/freelancer/Freelancer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Freelancer />} />
    </Routes>
  </BrowserRouter>,
);
