import React, { ReactDOM } from 'react';
import PropTypes from "prop-types";
import graph from './../img/graph.png'
import ReactApexCharts from 'react-apexcharts'
import CanvasJSReact from './../canvasjs.react';



// function Graph(props) {
//   return ( 
//   <React.Fragment>     
//     <div class="graph">
//       <img src={graph} width = "60px" alt="icon"/>
//     </div>
//     <div>
//       <button class="outline" onClick={()=> props.onSwitchingViews('')}>
//         Done
//       </button>
//     </div>
//   </React.Fragment>
//   )}

// Graph.propTypes = {
//   onSwitchingViews : PropTypes.func
// }







class Graph extends React.Component {	
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'blood sugar',
        data: [120, 111, 110, 70, 65, 100, 120]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2020-05-20T12:00:00.000Z", "2020-05-20T12:30:00.000Z", "2020-05-20T13:00:00.000Z", "2020-05-20T13:30:00.000Z", "2020-05-20T14:00:00.000Z", "2020-05-20T14:30:00.000Z", "2020-05-20T15:00:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  }

  render(props) {
    return (
      <React.Fragment>
        <div id="chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="area" height={350} />
        </div>
        <div>
          <button class="outline" onClick={()=> props.onSwitchingViews('')}>
            Done
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Graph.propTypes = {
  onSwitchingViews : PropTypes.func
}

export default Graph;
