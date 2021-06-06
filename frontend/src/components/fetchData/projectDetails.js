import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { name } = useParams();
  const [projectdetail, setProjectdetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/getIssuesByProject/${name}`)
      .then((result) => {
        setProjectdetail(result.data);
      });
  }, [name]);
  console.log(projectdetail);

  return (
    <div
      style={{
        maxWidth: `40%`,
        display: `flex`,
        flexDirection: `row`,
        textAlign: `center`,
        justifyContent: `center`,
      }}
    >
      {projectdetail.map((item, key) => (
        <div style={{ margin: `50px` }} key={projectdetail.Key}>
          <h3 style={{ padding: `5px` }} className="btn btn-success">
            {item.IssueType}
          </h3>
          <h5>{item.Creator}</h5>
          <p style={{ padding: `8px` }}>{item.Priority}</p>
          <span>{item.Status}</span>
          <p>{item.Created}</p>
          <div
            className="buttons container"
            style={{ display: `flex`, flexDirection: `row` }}
          >
            <Link
              style={{ margin: `10px` }}
              className="btn btn-primary"
              to={`/update/${item?.Key}`}
            >
              Edit Issue
            </Link>
            <Link
              style={{ margin: `10px` }}
              className="btn btn-danger"
              to={`/delete/${item?.Key}`}
            >
              Delete Issue
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
