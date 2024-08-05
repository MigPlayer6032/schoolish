import { Suspense } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./styles/firebaseEmulatorWarning.css";
import Loading from "./components/Loading";

ReactDOM.createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <SpeedInsights />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
