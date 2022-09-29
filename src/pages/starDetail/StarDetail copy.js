import React, { useEffect, useState } from "react";
import { baseService } from "../../api/baseService";
import "../starDetail/index.css";
import img from "../../assests/broken-image.png";
import { useLocation } from "react-router-dom";

function StarDetail() {
  const [detail, setDetail] = useState({});

  let location = useLocation();

  const getProduct = async () => {
    await baseService.getById("/starships/2/").then((data) => {
      setDetail(data);
      console.log(detail);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container detail ">
        <div className="card mb-3 ">
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            style={{ width: "75%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{detail.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarDetail;
