
import React, { useState, useEffect } from 'react';
import { Line, LineChart, YAxis, XAxis, Tooltip, Legend } from 'recharts';

function Session() {
  const [post, setPost] = useState({});


  useEffect(() => {
    fetchPosts()
  }, []);

  const fetchPosts = () => {
    fetch(`http://localhost:3001/user/12/average-sessions`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      })
  }


  return (

    <div className='container-test'>
      <div className='title'> Average spped of your sessions</div>
        <LineChart className="line" width={350} height={300} data={post.sessions}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} />
        </LineChart>
    </div>
  )
}



export default Session
