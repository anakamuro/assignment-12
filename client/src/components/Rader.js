import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import PropTypes from "prop-types";
import { fetchPerformance } from '../service/service';


class Rader extends React.Component {
  state = {
    posts: [],
    arr: []
  }

  componentDidMount() {

    fetchPerformance()
      .then(res => {
        console.log(res); this.setState({
          posts: res.data, arr: res.data.data.map(item => {
            return { value: item.value, kind: res.data.kind[item.kind] }
          })
        })
      })
      .catch(err => console.log(err));

  }
  render() {
    return (

      <RadarChart className="rader" outerRadius={90} width={350} height={300} data={this.state.arr}>
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

Rader.Types = {
  kind: PropTypes.number
}

export default Rader;