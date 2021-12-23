import { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState(null);
  try {
    useEffect(() => {
      fetch("https://workers.cks-media.workers.dev/posts")
        .then((res) => {
          return res.json();
        })
        .then((resJSON) => {
          const parsedPosts = [];
          for (const post of resJSON.posts) {
            parsedPosts.push(JSON.parse(post));
          }
          setPosts(parsedPosts);
        });
    }, []);
  } catch (err) {
    console.log(err);
  }
  return <div className="feed ">{posts && <Post posts={posts} />}</div>;
};

export default Feed;
