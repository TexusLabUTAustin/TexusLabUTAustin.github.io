import React from 'react';
import Plot from 'react-plotly.js';
import { parse, format, addDays } from 'date-fns'; // Import date-fns library for datetime parsing
import './Graph2.css'; 

function Graph2({ data }) {
    if (!data) {
        return <div>Loading...</div>; // Handle loading state
    }

    console.log(' Data:', data);

    const parsedData = data.map((row) => ({
        ...row,
        date: parse(row.DATE, 'yyyy-MM-dd', new Date()), // Adjust the date format if needed
        DailyAverageDryBulbTemperature: parseFloat(row.DailyAverageDryBulbTemperature),
        year: parseFloat(row.year),
    }));

    console.log('Parsed Data:', parsedData);

    const traces = [];
    const uniqueYears = [...new Set(parsedData.map((row) => row.year))];
    const lastYear = uniqueYears[uniqueYears.length - 2];

    console.log("lastYear",lastYear)

    


    for (const year of [...new Set(parsedData.map((row) => row.year))]) {
        const yearData = parsedData.filter((row) => row.year === year);
        const temperatures = yearData.map((row) => row.DailyAverageDryBulbTemperature);
        const hoverText = yearData.map((row) => `Year: ${row.year}<br>Date: ${format(row.date, 'MMMM do')}<br>Average Temperature: ${row.DailyAverageDryBulbTemperature}`);

        traces.push({
            x: Array.from({ length: temperatures.length }, (_, index) => index), // Use index as x-values
            y: temperatures,
            mode: 'lines',
            line: { 
                width: year === parsedData[parsedData.length - 2].year ? 2 : 0.8,
                color: year === parsedData[parsedData.length - 2].year ? 'red' : 'grey',
                 },
            hoverinfo:"text",
            text: hoverText,
            hoverlabel:{
                bgcolor: "white"
            },
                font: {
                    family: ["Helvetica", "Arial"]
                },         
            name: `Year ${year}`,
        });
    }



    const numbersArray = Array.from({ length: 365 }, (_, index) => index + 1);

    const every30thNumber = numbersArray.filter((number, index) => index % 31 === 0);
     const months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ];

    



         





    return (
        <div className = "Graph2">
            <Plot
                data={traces}
                layout={{
                    title: 'Daily Maximum Temperatures by Year',
                    xaxis: {
                        title: 'Date',
                        title: 'Date',
                        tickmode:"array",
                        tickvals:every30thNumber,
                        ticktext: months
                        
                        
                        
    
                        
                    },
                    yaxis: { title: 'Average Temperature' },
                    width: 1300,
                    height:600,
                    font:{
                        color:'black',
                        size:18,
                        },
                }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
}

export default Graph2;