import React, { useEffect, useState } from "react";
import Post from "./Post";

function LatestPost({ signedIn, post }) {
  const [likesCount, setLikesCount] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
        setLikesCount((likesCount) => likesCount + 1)
    }, 3000)
    return () => clearInterval(id);
  }, [])

  console.log("Rendering LatestPost component");
  return (
    <div>
      {post ? (
        <>
          <Post signedIn={signedIn} post={post} />
          {likesCount && (
            <div className="my-1 p-1">
              <span>{likesCount} Likes</span>
            </div>
          )}
        </>
      ) : (
        <p>Click on Get Latest Post button</p>
      )}
    </div>
  );
}

export default LatestPost;
