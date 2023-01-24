import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`posts/${post.id}`}>
          <h1>{post.label}</h1>
        </Link>
      ))}
    </>
  );
};

export default PostsList;
