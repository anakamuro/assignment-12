
import React, { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Activity() {
  const [post, setPost] = useState({});

  function fetchPosts() {
    fetch(`http://localhost:3001/user/12/activity`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      }).catch(e => {
        console.log('error,', e)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  



  // { day: '2020-07-01', kilogram: 80, calories: 240 }
  

  return (
    <div>
       <div className="act">Daily activity</div>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart className="bar" width={1000} height={600} data={post.sessions}>
        <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="black" />
          <Bar dataKey="calories" fill="red" />
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}



export default Activity
