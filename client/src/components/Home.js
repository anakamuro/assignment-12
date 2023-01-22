import React from 'react';
import PropTypes from "prop-types";
import { fetchPosts } from '../service/service';

class Home extends React.Component {
  state = {
    userInfos: []
  }

  componentDidMount() {

    fetchPosts()
      .then(res => { console.log( res); this.setState({ userInfos: res.data.userInfos }) })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="home">
        <div>
          Hello, <span className="name">{this.state.userInfos?.firstName}</span><span className="name2"> {this.state.userInfos?.lastName}, </span><span className="age">  Age: {this.state.userInfos?.age}</span><br />
        </div>
        <span className="con">Congratulations! You reached yesterday's goal<i className="fa-solid fa-hands-clapping"></i></span>
      </div>
    )
  }
}

Home.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number
}
export default Home
