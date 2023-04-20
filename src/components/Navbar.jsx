import React, { useState } from "react";
import "../App.css";
import Search from "./Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { data } from "autoprefixer";

export default function Navbar() {

	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
/* the const below is here because it calls the search data   */

	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(" ");

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

		const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();
				/* update current response */

				/* this add the cityname and countrycode for aesthetics */
				setCurrentWeather({ city: searchData.Label ,...weatherResponse});
				setForecast({ city: searchData.Label ,...forecastResponse});
			})
			.catch((err) => console.log(err));
	}

	console.log(currentWeather);
	console.log(forecast);

	return (
		<div className="navbar">
			<div className="">
				<h1 className="logo">AngaAPP</h1>
			</div>
			<Search onSearchChange={handleOnSearchChange}/>
			{currentWeather && <currentWeather data={currentWeather} />}
			<div className="location-container bg-slate-600">
				<h1 className="location">location</h1>
			</div>
		</div>
	);
}
