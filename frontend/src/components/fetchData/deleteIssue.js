import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteIssue = (props) => {
  const { Key } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/deleteissue/${Key}`).then((result) => {
      setProject(result.data);
    });
  }, [Key]);

  const handleRemovePost = () => {
    axios.delete(`http://127.0.0.1:5000/deleteissue/${Key}`).then((result) => {
      props.history.push("/");
    });
  };

  return (
    <div>
      <h2>
        delete or cancel Action <strong>{project?.title}</strong>?
      </h2>
      <br />
      <div className="btn-group">
        <Link to="/" className="btn btn-primary">
          <i className="fa fa-arrow-left"></i> cancel
        </Link>
        <button onClick={handleRemovePost} className="btn btn-danger">
          delete <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default DeleteIssue;
