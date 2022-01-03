import axios from "axios";
import React, { useState, useEffect } from "react";

const PostsWithAxios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postData = response.data;
      setPosts(postData);
    };
    axiosPosts();
  }, []);

  const usePosts = posts.map((post) => {
    const { id, title, body } = post;

    return (
      <div key={id}>
        <h3>{id}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Axios API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="axioscontainer">{posts && usePosts}</div>
    </div>
  );
};

export default PostsWithAxios;
