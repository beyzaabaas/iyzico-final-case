import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../../api/baseService";
import broken from "../../assests/broken-image.png";
import { useNavigate } from "react-router-dom";
import StarHeader from "../layout/StarHeader";

function StarDetail() {
  const params = useParams();
  const [starship, setStarship] = useState({});
  const imgURL = "https://starwars-visualguide.com/assets/img/starships/";
  const navigate = useNavigate();

  useEffect((item) => {
    console.log("Useeffect", item);
    baseService.getById(`starships`, params.id).then((res) => {
      console.log(res.data);
      setStarship(res.data);
    });
  }, []);

  // function getId(url) {
  //   return url.split("/")[url.split("/").length - 2];
  // }
  return (
    <>
      {
        <div className="container detail">
          <div className="card">
            <div className="row ">
              <div className="col">
                <img
                  className=" "
                  src={`${imgURL + params.id}.jpg`}
                  alt="Card image cap"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${broken}`;
                  }}
                />
                <div className="detail-text">
                  <div className="card-detail-text">
                    <h5>Name : {starship.name}</h5>
                    <h5>Model : {starship.model}</h5>
                    <h5>Hyperdrive Rating : {starship.hyperdrive_rating}</h5>
                    <h5>Passengers : {starship.passengers}</h5>
                    <h5>
                      Max Atmosphering Speed : {starship.max_atmosphering_speed}
                    </h5>
                    <h5>Manufacturer : {starship.manufacturer}</h5>
                    <h5>Crew : {starship.crew}</h5>
                    <h5>Cargo Capacity : {starship.cargo_capacity}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="back" onClick={() => navigate(-1)}>
            Back Homepage
          </button>
        </div>
      }

      {}
    </>
  );
}

export default StarDetail;
