import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteProject from "./fetchData/deleteIssue";
import axios from "axios";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/project").then((result) => {
      setProject(result.data);
    });
  }, []);
  console.log(project);
  return (
    <>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          margin: `80px auto`,
          maxWidth: `60%`,
        }}
      >
        {project.map((item, key) => (
          <div
            key={item.id}
            style={{
              display: `flex`,
              flexDirection: "column",
              flex: `1`,
              padding: `20px`,
              border: `1px solid gray`,
              margin: `10px`,
            }}
          >
            <Link to={`details/${item.name}`}>
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
