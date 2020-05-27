import React from 'react';
import PropTypes from "prop-types";
import ReactApexCharts from 'react-apexcharts';
import { Row } from 'react-bootstrap';

class Graph extends React.Component {	
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'blood sugar',
        data: props.values.map(value => { return value.value} ),
      }],
      options: {
        chart: {
          height: 500,
          type: 'area',
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: props.values.map(value => { return value.displayTime} )
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        fill: {
          colors: ['#7765E3', '#6564DB', '#2D268E']
        },
        colors: ['#2D268E']
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <br></br><h1>Great day!</h1><br></br>
        <Row className="justify-content-center mr-3" id="chart">
          <ReactApexCharts options={this.state.options} series={this.state.series} type="area" height={350} />
        </Row>
        <div>
          <button className="outline" onClick={()=> this.props.onSwitchingViews('')}>
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
