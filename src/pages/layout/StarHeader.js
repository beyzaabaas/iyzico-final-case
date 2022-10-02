import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assests/Star_Wars_Logo.png";

function StarHeader() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ alignItems: "center" }}>
        <img
          src={Logo}
          width={300}
          style={{ opacity: "0.8" }}
          onClick={() => navigate(-1)}
        ></img>
      </div>
    </>
  );
}

export default StarHeader;
