import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "../../pages/Beranda";

function Index() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
        </Routes>
      </Router>
    </>
  );
}

export default Index;
