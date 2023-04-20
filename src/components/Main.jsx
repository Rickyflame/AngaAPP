import React, { useState } from "react";
import Current from "./Current";
import Search from "./Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";

export default function Main() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(" ");

		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
		);

		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
		);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};
	console.log(currentWeather);
	console.log(forecast);
	return (
		<div className="flex-grow w-4/5 h-full overflow-y-scroll">
			<div className="navbar">
				<div className="">
					<h1 className="logo">AngaAPP</h1>
				</div>
				<Search onSearchChange={handleOnSearchChange} />
			</div>
			{currentWeather && <Current data={currentWeather} />}
			<div className="grid grid-cols-3 gap-10 mt-4 w-[95%]">
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
			</div>
			<div className="w-[95%] h-[15rem] my-10 graph">
				<p>GRAPH...</p>
			</div>
		</div>
	);
}
