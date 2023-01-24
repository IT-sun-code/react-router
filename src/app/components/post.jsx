import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = (id) => {
    return posts.find((post) => post.id === id);
  };
  const post = getPostById(id);
  const handleSave = () => {
    history.replace("/posts"); // не можем откатиться назад стрелкой дальше, чем нужно
    // history.push("/posts"); // можем долго возвращаться назад и "пересохраняться"
  };
  return (
    <>
      <h2>{post ? post.label : `Post with id:${id} is not found`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
