import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const UpdateIssue = (props) => {
  const { name } = useParams();
  const { handleSubmit, setValue } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${name}`).then((result) => {
      setValue("id", result.data.id);
      setValue("title", result.data.title);
      setValue("author", result.data.author);
      setValue("body", result.data.body);
    });
  }, [name]);

  const onSubmit = (data) => {
    axios.put(`http://localhost:5000/posts/${name}`, data).then((result) => {
      props.history.push("/");
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Edit Issue</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="issuekey"
              value=""
              placeholder="issuekey"
            />
            <input type="text" name="summary" value="" placeholder="summary" />
            <input
              type="text"
              name="description"
              value=""
              placeholder="description"
            />
            <Link to="/" className="btn btn-primary">
              <i className="fa fa-arrow-left"></i> cancel
            </Link>
            &nbsp;
            <button type="submit" className="btn btn-primary">
              save <i className="fa fa-save"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateIssue;
