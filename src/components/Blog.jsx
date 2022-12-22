import React, { useState, useEffect } from "react";
import allPosts from "../data/allPosts.json";
import fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";
import sortPosts from "../utils/sortPosts";
import LatestPost from "./LatestPost";
import UserPostsIndex from "./UserPostsIndex";

function Blog({ signedIn }) {
  const [updatedPosts, setUpdatedPosts] = useState(allPosts);
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const getLatestPosts = () => {
    const posts = fetchUpdatedPosts();
    setUpdatedPosts(posts);
  };
  const sortedPosts = sortPosts(updatedPosts);

  useEffect(() => {
    const id = setInterval(() => {
        setLocalTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(id);
  }, [])

  console.log("Rendering Blog component");
  return (
    <div>
      <div>{localTime}</div>
      <button onClick={getLatestPosts}>Get Latest Post</button>
        <LatestPost signedIn={signedIn} post={sortedPosts[0]} />
        <UserPostsIndex signedIn={signedIn} />
    </div>
  );
}

export default Blog;
