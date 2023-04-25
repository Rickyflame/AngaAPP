import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const TempGraph = ({ forecastData }) => {
	const [chart, setChart] = useState(null);

	useEffect(() => {
		if (forecastData && forecastData.data) {
			// Convert Unix timestamp to date string for each day
			const dateLabels = forecastData.data.map((day) => {
				const date = new Date(day.datetime);
				return date.toLocaleDateString("en-US", {
					weekday: "short",
				});
			});

			// Get the temperature for each day
			const temperatures = forecastData.data.map((day) => day.temp);

			// Initialize the chart with the data
			const ctx = document.getElementById("temperature-chart");
			if (chart !== null) {
				chart.destroy();
			}
			const newChart = new Chart(ctx, {
				type: "line",
				data: {
					labels: dateLabels,
					datasets: [
						{
							label: "Temperature (°C)",
							data: temperatures,
							borderColor: "#000",
							borderWidth: 1,
							pointRadius: 4,
							pointBackgroundColor: "rgba(255, 99, 132, 1)",
							pointBorderColor: "#fff",
							pointHoverRadius: 8,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgba(255, 99, 132, 1)",
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
							ticks: {
								callback: (value) => `${value}°C`,
								color: "#fff",
							},
							grid: {
								color: "#fff",
							},
						},
						x: {
							grid: {
								color: "#fff",
							},
							ticks: {
								color: "#fff",
							},
						},
					},
					plugins: {
						legend: {
							labels: {
								color: "#fff",
							},
						},
					},
				},
			});
			setChart(newChart);
		}
	}, [forecastData]);

	return (
		<canvas
			id="temperature-chart"
			style={{ width: "2000px" }}
		></canvas>
	);
};

export default TempGraph;
