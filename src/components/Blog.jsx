import React, { useState, useEffect } from "react";
import allPosts from "../data/allPosts.json";
import fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";
import sortPosts from "../utils/sortPosts";

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
    </div>
  );
}

export default Blog;
