
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

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

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
  ]



  // { day: '2020-07-01', kilogram: 80, calories: 240 }
  

  return (
    <div>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart className="bar" width={1000} height={600} data={post.sessions}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="black" />
          <Bar dataKey="calories" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}



export default Activity
