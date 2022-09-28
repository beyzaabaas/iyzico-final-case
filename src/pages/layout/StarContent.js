import React, { useEffect, useState } from "react";
import { baseService } from "../../api/baseService";
import Logo from "../../assests/Star_Wars_Logo.png"


function StarContent() {
  const [starships, setStarships] = useState([]);
  const imgURL = "https://starwars-visualguide.com/assets/img/starships/";
  useEffect(() => {
    baseService.getlAll("/starships").then((data) => {
      setStarships(data.results);
    });
  }, []);

  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }
  return (
    <>
      <div className="container ">
        <div className="row">
          {starships.map((starships) => (
            <div className="card" style={{ width: "21rem", minHeight: "23rem" }}>
              <img
                className="card-img-top"
                src={`${imgURL+getId(starships.url)}.jpg`}
                alt="Card image cap"
                // oError={`this.src=${Logo}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=`${Logo}`;
                }}
              ></img>
              <div className="">

                
                <h4>{starships.name}</h4>
                <h6>{starships.model}</h6>
                <p>{starships.hyperdrive_rating}</p>
                <button>Go to Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarContent;
