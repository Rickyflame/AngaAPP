import React, { useEffect, useState } from "react";
import "../App.css";
import * as dotenv from "dotenv";

dotenv.config();

function Navbar({ setWeatherData, setForecastData, setHourlyData }) {
	const [currentWeather, setcurrentWeather] = useState({});
	const [location, setLocation] = useState("");

	const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
	const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

	// Get current date
	const currentDate = new Date();
	// Get the date for the next day
	const nextDate = new Date();
	nextDate.setDate(currentDate.getDate() + 1);
	// format the dates as strings in the desired format
	const startDate = currentDate.toISOString().substring(0, 10);
	const endDate = nextDate.toISOString().substring(0, 10);

	// Search weather of a city
	const searchLocation = (event) => {
		if (event.key == "Enter") {
			// Fetching current weather, hourly forecast & daily forecast of searched location
			const searchedLocationCurrentWeatherUrl = `${WEATHER_API_URL}/current?city=${location}&key=${WEATHER_API_KEY}`;
			const searchedLocationForecastUrl = `${WEATHER_API_URL}/forecast/daily?city=${location}&key=${WEATHER_API_KEY}`;
			const searchedLocationHourlyForecastUrl = `${WEATHER_API_URL}/history/hourly?city=${location}&start_date=${startDate}&end_date=${endDate}&tz=local&key=${WEATHER_API_KEY}`;

			Promise.all([
				fetch(searchedLocationCurrentWeatherUrl),
				fetch(searchedLocationForecastUrl),
				fetch(searchedLocationHourlyForecastUrl),
			])
				.then((responses) =>
					Promise.all(responses.map((response) => response.json()))
				)
				.then((data) => {
					const searchedLocationWeatherResponse = data[0];
					const searchedLocationForecastResponce = data[1];
					const searchedLocationHourlyForecastResponse = data[2];

					setWeatherData(searchedLocationWeatherResponse);
					setcurrentWeather(searchedLocationWeatherResponse);
					setForecastData(searchedLocationForecastResponce);
					setHourlyData(searchedLocationHourlyForecastResponse);
				});
			setLocation("");
		}
	};

	useEffect(() => {
		// Check if browser has geolocation
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					// Fetching current weather, hourly forecast & daily forecast using latitude and longitude(current location)
					const currentLocationWeatherUrl = `${WEATHER_API_URL}/current?lat=${latitude}&lon=${longitude}&key=${WEATHER_API_KEY}`;
					const currentLocationForecastUrl = `${WEATHER_API_URL}/forecast/daily?lat=${latitude}&lon=${longitude}&key=${WEATHER_API_KEY}`;
					const currentLocationHourlyForecastUrl = `${WEATHER_API_URL}/history/hourly?lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}&tz=local&key=${WEATHER_API_KEY}`;

					Promise.all([
						fetch(currentLocationWeatherUrl),
						fetch(currentLocationForecastUrl),
						fetch(currentLocationHourlyForecastUrl),
					])
						.then((responses) =>
							Promise.all(responses.map((response) => response.json()))
						)
						.then((data) => {
							const currentLocationWeatherResponse = data[0];
							const currentLocationforecastResponse = data[1];
							const currentLocationHourlyForecastResponse = data[2];

							setcurrentWeather(currentLocationWeatherResponse);
							setForecastData(currentLocationforecastResponse);
							setWeatherData(currentLocationWeatherResponse);
							setHourlyData(currentLocationHourlyForecastResponse);

							console.log(
								currentLocationWeatherResponse,
								currentLocationforecastResponse,
								currentLocationHourlyForecastResponse
							);
						})
						.catch((error) => console.error(error));
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		} else {
			console.error("Geolocation API is not available in this browser.");
		}
	}, []);

	return (
		<div className="navbar">
			<div className="">
				<h1 className="logo">AngaAPP</h1>
			</div>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for city"
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
				/>
			</div>
			<div className="location-container">
				{currentWeather.data ? (
					<p>
						{currentWeather.data[0].city_name},
						{currentWeather.data[0].country_code}
					</p>
				) : null}
			</div>
		</div>
	);
}

export default Navbar;
