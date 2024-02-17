import React, { Component } from 'react';
import Chart from 'chart.js'; // Import Chart.js library
import './chartjslinechart.css';
class ChartJsLineChart extends Component {
  chartRef = React.createRef(); // Create a reference for the chart canvas

  componentDidMount() {
    // Call the function to create the chart when the component mounts
    this.createChartJSLineChart();
  }

  componentDidUpdate(prevProps) {
    // Re-create the chart if the data prop changes
    if (prevProps.data !== this.props.data) {
      this.createChartJSLineChart();
    }
  }

  createChartJSLineChart() {
    // Get the canvas element using the ref
    const canvas = this.chartRef.current;

    // Extract data from props
    const { data } = this.props;
    const labels = data.map(d => d.category);
    const amounts = data.map(d => d.amount);

    // Define data for the chart
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Amount ($)',
        data: amounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }]
    };

    // Create the chart using Chart.js
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Category'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Amount ($)'
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Line Chart</h2>
        <div className="chart-container">
          <canvas
            ref={this.chartRef}
            id="lineChart"
          />
        </div>
      </div>
    );
  }
  
}

export default ChartJsLineChart;
