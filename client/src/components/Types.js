import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


    function Types() {
    const [post, setPost] = useState({});
  
  
    useEffect(() => {
      fetchPosts()
    }, []);
  
    const fetchPosts = () => {
      fetch(`http://localhost:3001/user/12/performance`)
        .then((response) => response.json())
        .then((response) => {
          console.log("types response ", response.data)
          setPost(response.data)
        })
    }
 {/*
      <ResponsiveContainer className="types" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={post.kinds}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kinds" />
          <PolarRadiusAxis />
          <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>*/}



   if(post && post.kind){
    let arr=post.data
    arr=arr.map(item=>{
                                               
      return {value:item.value,kind:post.kind[item.kind]}
    })
    console.log("arr",arr)
    return (

      <RadarChart className="types" outerRadius={90} width={350} height={300} data={arr}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="value"
        dataKey="value"
        stroke="rgba(255, 1, 1, 0.7)"
        fill="rgba(255, 1, 1, 0.7)"
        fillOpacity={0.6}
      />
    
      
    </RadarChart>
    )

   }
  }
    

export default Types;