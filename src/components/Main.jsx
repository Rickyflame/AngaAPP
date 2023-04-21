import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MorningSun from "../assets/weather-icons/sun.png";
import SunClouds from "../assets/weather-icons/sun-cloud.png";
import EveningIcon from "../assets/weather-icons/evening.png";
import SunIcon from "../assets/weather-icons/01d.png";
import WindIcon from "../assets/weather-icons/wind.png";

export default function Main() {
	const [data, setData] = useState({});
	const [currentDate, setCurentDate] = useState(new Date());

	useEffect(() => {
		// Set interval to update current date and time
		const intervalId = setInterval(() => {
			setCurentDate(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	// Format date in "month(in words) day, year" format
	const options = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	const formattedDate = currentDate.toLocaleDateString(undefined, options);

	return (
		<div className="flex-grow w-4/5 h-full overflow-y-scroll">
			<Navbar setWeatherData={setData} />

			<div className="main-element">
				<div className="flex gap-10">
					<div className="flex flex-col ml-4">
						{data.main ? (
							<h1 className="temperature">{data.main.temp.toFixed()}°C</h1>
						) : null}

						<p className="date">{formattedDate}</p>
						{data.weather ? (
							<p className="description">{data.weather[0].description}</p>
						) : null}
					</div>
					<div className="parts-of-day-container">
						<div className="parts-of-day morning">
							<p className="mx-4">Morning</p>
							<div className="flex items-center justify-between mx-4">
								<p className="text-[60px]">20°</p>
								<img
									src={MorningSun}
									alt=""
									className="parts-of-day-icon"
								/>
							</div>
						</div>
						<div className="parts-of-day midday">
							<p className="mx-4">Midday</p>
							<div className="flex items-center justify-between mx-4">
								<p className="text-[60px]">20°</p>
								<img
									src={SunClouds}
									alt=""
									className="parts-of-day-icon"
								/>
							</div>
						</div>
						<div className="parts-of-day evening">
							<p className="mx-4">Evening</p>
							<div className="flex items-center justify-between mx-4">
								<p className="text-[60px]">20°</p>
								<img
									src={EveningIcon}
									alt=""
									className="parts-of-day-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-10 mt-4 w-[95%]">
				<div className="elements">
					<div className="mx-4 mt-4">
						<p className="elements-title">Feels like</p>
						{data.main ? (
							<p className="elements-units">
								{data.main.feels_like.toFixed()}°
							</p>
						) : (
							<p className="elements-units">23°</p>
						)}
					</div>
					<img
						src={SunIcon}
						alt=""
					/>
				</div>
				<div className="elements">
					<div className="mx-4 mt-4">
						<p className="elements-title">Wind</p>
						{data.wind ? (
							<p className="elements-units">{data.wind.speed.toFixed()}m/s</p>
						) : (
							<p className="elements-units">2 m/s</p>
						)}
					</div>
					<img
						src={WindIcon}
						alt=""
						className="h-[6rem] my-8 mr-8"
					/>
				</div>
				<div className="elements">
					<div className="mx-4 mt-4">
						<p className="elements-title">Pressure</p>
						{data.main ? (
							<p className="elements-units">{data.main.pressure}hPa</p>
						) : (
							<p className="elements-units">1022 hPa</p>
						)}
					</div>
					<img
						src={SunIcon}
						alt=""
					/>
				</div>
				<div className="elements">
					<div className="mx-4 mt-4">
						<p className="elements-title">Humidity</p>

						{data.main ? (
							<p className="elements-units">{data.main.humidity.toFixed()}%</p>
						) : (
							<p className="elements-units">45%</p>
						)}
					</div>
					<img
						src={SunIcon}
						alt=""
					/>
				</div>
				<div className="elements">
					<div className="ml-4 mt-4">
						<p className="elements-title">Min Temp</p>
						{data.main ? (
							<p className="elements-units">{data.main.temp_min.toFixed()}°</p>
						) : (
							<p className="elements-units">20°</p>
						)}
					</div>
					<img
						src={SunIcon}
						alt=""
					/>
				</div>
				<div className="elements">
					<div className="ml-4 mt-4">
						<p className="elements-title">Max Temp</p>
						{data.main ? (
							<p className="elements-units">{data.main.temp_max.toFixed()}°</p>
						) : (
							<p className="elements-units">20°</p>
						)}
					</div>
					<img
						src={SunIcon}
						alt=""
					/>
				</div>
			</div>
			<div className="w-[95%] h-[15rem] my-10 graph">
				<p>GRAPH...</p>
			</div>
		</div>
	);
}
