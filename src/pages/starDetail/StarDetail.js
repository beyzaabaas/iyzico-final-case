import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../../api/baseService";

function StarDetail() {
  const params = useParams();
  const [starship, setStarship] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    baseService.getById(`starships`, params.id).then((data) => {
      setStarship(data);
    });
  }, []);

  return <div>{starship?.name}</div>;
}

export default StarDetail;
