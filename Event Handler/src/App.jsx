// The App component maintains a list of posts in its state.
// When the "GET POSTS" button is clicked, the FetchData function
//  is called, which fetches data from an API and updates the state with the fetched posts.
// The posts are then displayed by mapping over the posts array and rendering a Post component for each post.

import React, { useState } from 'react';
import Post from './Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const FetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>
      {
        setPosts(data);
      })
    .then((err)=>console.log(err))
  }

  return (
    <div className="App">
      <button onClick={FetchData}>GET POSTS</button>
      <div className="posts-container" style={{width:"800px",marginLeft:"40%" }}>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;         
