import React, { useEffect, useState } from "react";
import { baseService } from "../../api/baseService";
import Logo from "../../assests/Star_Wars_Logo.png";
import broken from "../../assests/broken-image.png";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";

function StarContent() {
  const [starships, setStarships] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const nPages = Math.ceil(starships.count / 10);

  const imgURL = "https://starwars-visualguide.com/assets/img/starships/";

  useEffect(() => {
    baseService.getlAll(`starships?page=${page}`).then((data) => {
      setStarships(data);
      setLoading(false);
    });
  }, [page]);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  return (
    <>
      <div className="container ">
        <Pagination
          nPages={nPages}
          currentPage={page}
          setCurrentPage={setPage}
          isInfinite={true}
        />
        <Pagination
          nPages={nPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
        <span className="visually-hidden">Loading...</span>
        {/* <button
          type="button"
          className="btn btn-light"
          onClick={() => setPage(2)}
        >
          Show More
        </button> */}

        <div className="row">
          {starships.results.map((starship) => (
            <div
              key={starship.name}
              className="card"
              style={{ width: "21rem", minHeight: "23rem" }}
            >
              <Link
                className={"stretched-link"}
                to={`starships/${getId(starship.url)}`}
              ></Link>
              <img
                className="card-img-top"
                src={`${imgURL + getId(starship.url)}.jpg`}
                alt="Card image cap"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = `${broken}`;
                }}
              ></img>
              <div>
                <h4>{starship.name}</h4>
                <h6>{starship.model}</h6>
                <p>{starship.hyperdrive_rating}</p>
                <div className="m-2">
                  <button className="btn-details">Go to Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarContent;
