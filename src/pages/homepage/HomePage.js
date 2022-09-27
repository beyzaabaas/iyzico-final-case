
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseService } from "../../api/baseService";


function HomePage() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    baseService.getlAll("/starships").then((data) => {
      setStarships(data.results);
    });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Hyperdrive Rating",
      dataIndex: "hyperdrive_rating",
    },
  ];
  return (
    <div>
      <>
      <Table columns={columns} dataSource={starships}></Table>
      </>
    </div>
  );
}

export default HomePage;
