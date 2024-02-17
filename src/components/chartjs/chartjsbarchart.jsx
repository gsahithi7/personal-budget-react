import React, { Component } from 'react';
import Chart from 'chart.js'; // Import Chart.js library
import './chartjslinechart.css';
class ChartJSBarChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(); // Create a reference for the canvas element
  }

  componentDidMount() {
    this.createChartJSBarChart(); // Call the function to create the Chart.js bar chart when the component mounts
  }

  componentDidUpdate(prevProps) {
    // Re-create the chart if the data prop changes
    if (prevProps.data !== this.props.data) {
      this.createChartJSBarChart();
    }
  }

  createChartJSBarChart = () => {
    // Get the canvas element using the ref
    const canvas = this.canvasRef.current;

    // Extract data from props
    const { data } = this.props;
    const labels = data.map(d => d.category);
    const amounts = data.map(d => d.amount);
    const backgroundColors = data.map((d, index) => `rgba(${index * 40},${index * 60},${index * 20},0.7)`);

    // Define data for the chart
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Amount ($)',
        data: amounts,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1
      }]
    };

    // Create the chart using Chart.js
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            beginAtZero: true,
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
  };

  render() {
    return (
      <div className="chart-container">
        <h2>Bar Chart</h2>
        <canvas ref={this.canvasRef} id="chartJSChart" />
      </div>
    );
  }
}

export default ChartJSBarChart;
