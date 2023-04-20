import React, { useState } from "react";
import "../App.css";
import * as dotenv from "dotenv";

dotenv.config();

export default function Navbar({ setWeatherData }) {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");

	const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
	const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

	const url = `${WEATHER_API_URL}/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`;

	const searchLocation = (event) => {
		if (event.key == "Enter") {
			fetch(url)
				.then((response) => response.json())
				.then((weatherData) => {
					setWeatherData(weatherData);
					setData(weatherData);
					console.log(weatherData);
				});
			setLocation("");
		}
	};

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
				{data.sys ? (
					<p>
						{data.name}, {data.sys.country}
					</p>
				) : (
					<p>{data.name}</p>
				)}
			</div>
		</div>
	);
}
