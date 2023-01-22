
import React from 'react';
import { Line, LineChart, YAxis, XAxis, Tooltip } from 'recharts';
import PropTypes from "prop-types";
import { fetchSession } from '../service/service';

class Session extends React.Component {
  state = {
    sessions: []
  }

  componentDidMount() {

    fetchSession()
      .then(res => { console.log(res); this.setState({ sessions: res.data.sessions }) })
      .catch(err => console.log(err));
  }


  render() {
    return (

      <div className='container-test'>
        <div className='title'> Average spped of your sessions</div>
        <LineChart className="line" width={350} height={300} data={this.state.sessions}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} />
        </LineChart>
      </div>
    )
  }
}

Session.propTypes = {
  day: PropTypes.number,
  sessionLength: PropTypes.number
}


export default Session
