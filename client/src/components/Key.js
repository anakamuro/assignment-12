import React, { useState, useEffect } from 'react';


function Key() {
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
      <div className="key">
        <div className="data-box">
        <div className="icon">
        <div className="image"></div>
        <div className="box"></div>
        </div>
        <div className="text-box">
        <span className="text">{post.keyData?.calorieCount}kCal</span>
        <span className="text2">Calories</span>
        </div>
        </div>
        <div className="data-box">
        <div className="icon">
        <div className="image2"></div>
        <div className="box2"></div>
        </div>
        <div className="text-box">
        <span className="text">{post.keyData?.proteinCount}kCal</span>
        <span className="text2">Proteins</span>
        </div>
        </div>
        <div className="data-box">
        <div className="icon">
        <i className="fa-solid fa-apple-whole"></i>
        <div className="box3"></div>
        </div>
        <div className="text-box">
        <span className="text">{post.keyData?.carbohydrateCount}kCal</span>
        <span className="text2">Carbs</span>
        </div>
        </div>
        <div className="data-box">
        <div className="icon">
        <i className="fa-solid fa-burger"></i>
        <div className="box4"></div>
        </div>
        <div className="text-box">
        <span className="text">{post.keyData?.lipidCount}kCal</span>
        <span className="text2">Lipids</span>
        </div>
        </div>
      </div>
    )
      
         
}
export default Key
