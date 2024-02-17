import React, { Component } from 'react';
import axios from 'axios';
import D3PieChart from '../d3chart/d3piechart';
import ChartJsLineChart from '../chartjs/chartjslinechart';
import ChartJSBarChart from '../chartjs/chartjsbarchart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataFetched: false // Add a flag to track whether data is fetched
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    if (!this.state.isDataFetched) {
      this.fetchData(); // Fetch data only if it's not fetched already
    }
  }
  

  fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/budget');
      this.setState({ 
        data: response.data.expenses.expenses,
        isDataFetched: true // Set the flag to true once data is fetched
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div>
         <ChartJsLineChart data={data} />
         <D3PieChart data={data} />
         <ChartJSBarChart data={data} />
      </div>
    );
  }
}

export default Dashboard;
