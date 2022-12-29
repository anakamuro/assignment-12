import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';


function Score() {
  const [post, setPost] = useState({});


  useEffect(() => {
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

  let todayScorePercent = post.todayScore * 100
  let options = {
    labels: [`${todayScorePercent}% of your goal`],

    plotOptions: {

      radialBar: {

        hollow: {
          size: '70%',

        }
      }
    }

  }

  return (
    <div id="chart">
      <h4 className="score2">Score</h4>
      <Chart className="score" options={{
        labels: [`${todayScorePercent}% of your goal`],

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



      }} series={[todayScorePercent]} type="radialBar" height={300} />
    </div>
  )
}

// return null
/*
<RadialBarChart
cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" barSize={20} 
className="score" width={500} height={500} data={dataArray}>
  <h1>Hello</h1>
  <RadialBar minAngle={15}
    // label={{ fill: "#fff" }}
    stroke="blue" 
    
    dataKey="todayScore" />
</RadialBarChart>
 
);*/


export default Score;