import React from "react";
import Logo from "../../assests/Star_Wars_Logo.png";


function StarHeader() {
  return (
    <>
     <div style={{alignItems:"center"}}>
     <img
        src={Logo}
        width={300}
        style={{opacity:"0.8"}}
      ></img>
     </div>
    </>
  );
}

export default StarHeader;
