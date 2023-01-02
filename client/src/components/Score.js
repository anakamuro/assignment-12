import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from "prop-types";
import { fetchPosts } from '../service/service';

class Score extends React.Component {
  state = {
    posts: [],
    todayScorePercent: 0,
  }

  componentDidMount() {
    fetchPosts()
      .then(res => { console.log(res); this.setState({ posts: res.data, todayScorePercent: res.data.todayScore * 100 }) })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div id="chart">
        <h4 className="score2">Score</h4>
      
          <Chart className="score" options={{
            type: 'radialBar',
            labels: [`${this.state.todayScorePercent}% of your goal`],

            plotOptions: {

              radialBar: {
                dataLabels: {
                  name: {
                    color: '#000000'
                  },
                  value: {
                    fontSize: '0px',

                  },

                },

                hollow: {
                  size: '70%',

                }
              }
            },
            colors: ['#ff0000'],

          }} series={[this.state.todayScorePercent]} type='radialBar' height={300} />
       
      </div>
    )
  }
}

Score.propTypes = {
  todayScorePercent: PropTypes.number
}

export default Score;