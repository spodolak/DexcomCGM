import React, { ReactDOM } from 'react';
import PropTypes from "prop-types";
import ReactApexCharts from 'react-apexcharts'

class Graph extends React.Component {	
  constructor(props) {
    console.log(props.values[0].systemTime);
    console.log(props.values[0].value);
    super(props);
    this.state = {
      series: [{
        name: 'blood sugar',
        data: props.values.map(value => { return value.value})
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
          categories: props.values.map(value => { return value.displayTime})
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0'],
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      }
    };
  }

  render() {
    // console.log(this.props.values[0].systemTime);
    // console.log(this.props.values[0].value);
    return (
      <React.Fragment>
        <div id="chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="area" height={350} />
        </div>
        <div>
          <button class="outline" onClick={()=> this.props.onSwitchingViews('')}>
            Done
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Graph.propTypes = {
  onSwitchingViews : PropTypes.func,
  values : PropTypes.array
}

export default Graph;
