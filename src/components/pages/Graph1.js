import React from "react";

import Plot from "react-plotly.js";

import './Graph1.css'; // Import the CSS file


function Graph1({ data }) {

  console.log("Data prop contents:", data);

  const parsedData = data.map(row => ({
    DATE: new Date(row["DATE"]).getTime(), // Convert date to timestamp
    MonthlyMeanTemperature: parseFloat(row["MonthlyMeanTemperature"]),
    MonthlyMinimumTemperature: parseFloat(row["MonthlyMinimumTemperature"]),
    MonthlyMaximumTemperature: parseFloat(row["MonthlyMaximumTemperature"])
  }));

  console.log("Parsed prop contents:", parsedData);

    
  const formattedDates = parsedData.map(row => ({
    DATE: new Date(row.DATE).toLocaleDateString(), // Convert timestamp to date string
    MonthlyMeanTemperature: row.MonthlyMeanTemperature,
    MonthlyMinimumTemperature: row.MonthlyMinimumTemperature,
    MonthlyMaximumTemperature: row.MonthlyMaximumTemperature
  }));

  const hovertext1 = formattedDates.map(row => {
    const difference = row.MonthlyMaximumTemperature - row.MonthlyMeanTemperature;
    return `Date: ${row.DATE}<br>Maximium Temperature: ${row.MonthlyMaximumTemperature}°F<br>Difference from Mean: ${difference.toFixed(2)}°F`;
  });

  const hovertext2 = formattedDates.map(row => {
    return `Date: ${row.DATE}<br>Mean Temperature: ${row.MonthlyMeanTemperature}°F `;
  });
  

  const hovertext3 = formattedDates.map(row => {
    const difference = row.MonthlyMeanTemperature - row.MonthlyMinimumTemperature;
    return `Date: ${row.DATE}<br>Minimum Temperature: ${row.MonthlyMinimumTemperature}°F<br>Difference from Mean: ${difference.toFixed(2)}°F`;
  });

  const trace1 = {
    x: formattedDates.map(row => row.DATE),
    y: formattedDates.map(row => row.MonthlyMeanTemperature),
    mode: 'lines',
    line : {
        color: "green"
    },
    name: 'Mean Temperature',
    hoverinfo:'text',
    text:hovertext2,
    fill: 'none'
  };

  const trace2 = {
    x: formattedDates.map(row => row.DATE),
    y: formattedDates.map(row => row.MonthlyMinimumTemperature),
    mode: 'lines',
    line : {
        color: "#2E5984"
    },
    name: 'Min Temperature',
    hoverinfo: 'text',
    text: hovertext3,
  };

  const trace3 = {
    x: formattedDates.map(row => row.DATE),
    y: formattedDates.map(row => row.MonthlyMaximumTemperature),
    mode: 'lines',
    line : {
        color: "red"
    },
    name: 'Max Temperature',
    hoverinfo: 'text',
    text: hovertext1,
    fillcolor: 'rgba(255, 0.1, 0.1, 0.1)',
    fill: 'tonexty'
  };

  const layout = {
    title: 'Temperature Trends',
    xaxis: {
      title: 'Date',
      tickmode: 'array', // Set tickmode to control tick values
      tickvals: formattedDates.map(row => row.DATE).filter((_, index) => index % 10 === 0), // Display every 3rd date

    },
    yaxis: {
      title: 'Temperature'
    },
    plot_bgcolor: 'rgba(255,255,255,0.6)',
    paper_bgcolor: 'rgba(0,0,0,0.0)',
    width: 1000,
    height:600,
    font:{
      color:'black',
      size:18,
    },


  };

  return (
    <div className='Graph1'>
      <div className='video-container'>
      <video src={process.env.PUBLIC_URL + '/videos/video-1.mp4'} autoPlay loop muted />
      </div>
      <Plot
        data={[trace1, trace2, trace3]}
        layout={layout}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default Graph1;