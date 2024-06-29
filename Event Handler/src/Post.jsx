
import React from 'react';


function Post({ title, body }) {
  return (
    <div className="post" style={{border:"2px solid #61D5D5",marginBottom:"5%"}}>
      <h2 style={{textAlign:"center"}}>{title}</h2>
      <h3 style={{textAlign:"center"}}>{body}</h3>
    </div>
  );
}

export default Post;