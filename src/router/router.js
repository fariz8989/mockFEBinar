import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
} from "../controller/pageController";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<HomePage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
