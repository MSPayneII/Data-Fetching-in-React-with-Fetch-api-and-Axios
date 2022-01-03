import React, { useState, useEffect } from "react";

const PostsWithFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();

      setPosts(postsData);
    };

    fetchPosts();
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
    <>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="container">{posts && usePosts}</div>
    </>
  );
};

export default PostsWithFetch;
