import React from "react";

function Post({ signedIn, post }) {
  console.log("Rendering Post component");

  return (
    <div>
      {post && (
        <div className="post p-1">
          <h1 className="heading-sm py-1">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default React.memo(Post);
