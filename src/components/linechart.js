import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../stylesheet/LineChart.css';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Wespace',
        fill: false,
        borderColor: '#E85D75',
        data: [3, 15, 42, 72, 98]
      },
      {
        label: 'Facebook',
        fill: false,
        borderColor: '#0197F6',
        data: [2, 8, 26, 30, 28]
      },
      {
        label: 'Snapchat',
        fill: false,
        borderColor: '#FFDA1F',
        data: [1, 15, 40, 42, 39]
      }
    ],
}

class LineChart extends Component {
  render(){

    return (
      <section className="chart__section">
        <div className="chart__container">
          <Line
              data={state}
              options={{
                title:{
                    display:true,
                    text:'Communities created through Social Platforms',
                    fontSize:20,
                    fontColor: '#fff'
                },
                legend:{
                    display:true,
                    position:'top',
                    labels: {
                      fontColor: '#fff'
                    }
                },
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        fontColor: '#fff'
                      }
                    }
                  ],
                  yAxes: [
                    {
                      ticks: {
                        fontColor: '#fff'
                      }
                    }
                  ]
                }
              }}
          />
        </div>
      </section>
    );

  }

}

export default LineChart;