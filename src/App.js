import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(Response => Response.json())
      .then(Response => setPosts(Response))
  }, [])
  return (
    <div className="App">
      <h1>React Functional API Call</h1>
      {
        posts.map(post => <div style={{ textAlign: 'left', width: '60 %', marging: '0 auto', marginLeft: '30%' }}>
          {`${post.id}. ${post.title}`}
        </div>)
      }
    </div>
  );
}

export default App;
