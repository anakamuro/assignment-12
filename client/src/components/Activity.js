
import React from 'react';
import { BarChart, CartesianGrid, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import PropTypes from "prop-types";
import { fetchActivity } from '../service/service';



  class Activity extends React.Component {
    state = {
      sessions: []
    }
  
    componentDidMount() {
  
      fetchActivity()
        .then(res => { console.log( res); this.setState({ sessions: res.data.sessions }) })
        .catch(err => console.log(err));
    }
  // { day: '2020-07-01', kilogram: 80, calories: 240 }
  
  render(){
  return (
    <div>
       <div className="act">Daily activity</div>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart className="bar" width={1000} height={600} data={this.state.sessions}>
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
  }

Activity.propTypes = {
  day:PropTypes.string, 
  sessions:PropTypes.arrayOf(PropTypes.shape(
  {
    day:PropTypes.number, 
    kilogram:PropTypes.number,
    calories:PropTypes.number
  }
))
}

export default Activity
