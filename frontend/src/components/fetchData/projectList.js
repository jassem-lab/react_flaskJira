import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/project").then((result) => {
      setPosts(result.data);
    });
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((item, key) => (
        <div key={item.id} style={{ display: `flex`, flexDirection: "column" }}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
