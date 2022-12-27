import React, { useState, useEffect } from 'react';


function Home() {
  const [post, setPost ] = useState({});
  

  useEffect(()=> {
    fetchPosts()
  }, []);

  const fetchPosts = () => {
    let x = 12
    fetch(`http://localhost:3001/user/${x}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      })
  }

  
    return (
      <div className="home">
        <div>
        Hello, <span className="name">{post.userInfos?.firstName}</span><span className="name2"> {post.userInfos?.lastName}, </span><span className="age">  Age: {post.userInfos?.age}</span><br/>
        </div>
       <span className="con">Congratulations! You reached yesterday's goal<i className="fa-solid fa-hands-clapping"></i></span>
      </div>
    )
      
         
}
export default Home
