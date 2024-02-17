import React, { Component } from 'react';
import * as d3 from 'd3';

class D3PieChart extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef(); // Create a reference for the SVG element
  }

  componentDidMount() {
    this.createD3PieChart(); // Call the function to create the D3 pie chart when the component mounts
  }

  componentDidUpdate(prevProps) {
    // Re-create the chart if the data prop changes
    if (prevProps.data !== this.props.data) {
      this.createD3PieChart();
    }
  }

  createD3PieChart = () => {
    // Clear SVG to prevent overlaying charts
    d3.select(this.svgRef.current).selectAll("*").remove();
  
    const pieData = this.props.data.map(d => ({
      category: d.category,
      amount: parseFloat(d.amount)
    }));
  
    const width = 600;
    const height = 500;
    const radius = Math.min(width, height) / 2;
  
    const svg = d3.select(this.svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
  
    const pie = d3.pie().value(d => d.amount);
  
    const arc = d3.arc().outerRadius(radius * 0.8).innerRadius(radius * 0.4);
    const arcHover = d3.arc().outerRadius(radius * 0.9).innerRadius(radius * 0.4); // Define an arc for hover state
  
    const arcs = svg.selectAll(".arc")
      .data(pie(pieData))
      .enter()
      .append("g")
      .attr("class", "arc");
  
    arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", arcHover(d));
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", arc(d));
      });
  
    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(d => d.data.category)
      .attr("fill", "white");
  };
  


  render() {
    return (
    <div>
      <h2>D3 Pie Chart</h2>
    <svg ref={this.svgRef} />;
    </div>
    );
  }
}

export default D3PieChart;
