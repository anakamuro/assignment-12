import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


    function Types() {
    const [post, setPost] = useState({});
  
  
    useEffect(() => {
      fetchPosts()
    }, []);
  
    const fetchPosts = () => {
      fetch(`http://localhost:3001/user/12/performance`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.data)
          setPost(response.data)
        })
    }


    return (
      <ResponsiveContainer class="types" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={post.kinds}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kinds" />
          <PolarRadiusAxis />
          <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }


export default Types;