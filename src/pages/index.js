import "./index.css";
import React from "react";
import StarHeader from "./layout/StarHeader";
import StarContent from "./layout/StarContent";

import { Route, Routes } from "react-router-dom";

function Index() {
  return (
    <>
      <StarHeader />
      <Routes>
        <Route path="/" index element={<StarContent />} />
      </Routes>
    </>
  );
}

export default Index;
