import React, { useEffect, useState } from "react";
import { baseService } from "../../api/baseService";
import broken from "../../assests/broken-image.png";
import Pagination from "../pagination/Pagination";
import { Link, useParams } from "react-router-dom";

function StarContent() {
  const params = useParams();
  const [starships, setStarships] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(params.page ? params.page : 1);

  const nPages = Math.ceil(starships.count / 10);

  const imgURL = "https://starwars-visualguide.com/assets/img/starships/";

  useEffect(() => {
    baseService.getlAll(`starships?page&=${page}`).then((data) => {
      setStarships(data);
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

        <div className="row">
          {starships.results.map((starship) => (
            <div
              key={starship.name}
              className="card"
              style={{ width: "25rem", minHeight: "28rem" }}
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
              <div className="p-2">
                <h5>{starship.name}</h5>
                <h6>{starship.model}</h6>
                <p>{starship.hyperdrive_rating}</p>
              </div>
              <div className="m-1">
                <button className="btn-details">Click Here...</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarContent;
