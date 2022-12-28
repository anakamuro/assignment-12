import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
  
  
function Score() {
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
  <RadialBarChart className="score" width={500} height={500} data={post.todayScore}>
    <RadialBar minAngle={15} dataKey="todayScore" />
  </RadialBarChart>
);
}
  
export default Score;