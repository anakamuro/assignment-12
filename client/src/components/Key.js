import React from 'react';
import PropTypes from "prop-types";
import { fetchPosts } from '../service/service';



class Key extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetchPosts()
      .then(res => { console.log(res.data.keyData); this.setState({ posts:res.data}) })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="key">
        <div className="data-box">
          <div className="icon">
            <div className="image"></div>
            <div className="box"></div>
          </div>.
          <div className="text-box">
            <span className="text">{this.state.posts?.keyData?.calorieCount}kCal</span>
            <span className="text2">Calories</span>
          </div>
        </div>
        <div className="data-box">
          <div className="icon">
            <div className="image2"></div>
            <div className="box2"></div>
          </div>
          <div className="text-box">
            <span className="text">{this.state.posts.keyData?.proteinCount}kCal</span> 
            <span className="text2">Proteins</span>
          </div>
        </div>
        <div className="data-box">
          <div className="icon">
            <i className="fa-solid fa-apple-whole"></i>
            <div className="box3"></div>
          </div>
          <div className="text-box">
            <span className="text">{this.state.posts.keyData?.carbohydrateCount}kCal</span>
            <span className="text2">Carbs</span>
          </div>
        </div>
        <div className="data-box">
          <div className="icon">
            <i className="fa-solid fa-burger"></i>
            <div className="box4"></div>
          </div>
          <div className="text-box">
            <span className="text">{this.state.posts.keyData?.lipidCount}kCal</span>
            <span className="text2">Lipids</span>
          </div>
        </div>
      </div>
    )
  }
}


Key.propTypes = {
  calorieCount: PropTypes.number,
  proteinCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number
}
export default Key
