import PostsList from "./postsList";
import Post from "./post";
// import query from "query-string";
// import _ from "lodash";
import { useParams } from "react-router-dom";

const Posts = () => {
  // const Posts = ({ match }) => {
  const posts = [
    { id: "1", label: "post 1" },
    { id: "2", label: "post 2" },
    { id: "3", label: "post 3" },
  ];
  // const postId = match.params.postId;
  const { postId } = useParams();
  // const search = query.parse(location.search);
  // console.log(search);
  // const cropPosts = search
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
