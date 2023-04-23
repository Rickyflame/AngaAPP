import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Sun from "../assets/weather-icons/sun.png";
import SunClouds from "../assets/weather-icons/sun-cloud.png";
import EveningIcon from "../assets/weather-icons/evening.png";
import WindIcon from "../assets/weather-icons/wind.png";

function Main() {
	const [data, setData] = useState({});
	const [currentDate, setCurentDate] = useState(new Date());
	const [forecast, setForecast] = useState({});

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
		<div className="flex-grow h-full mx-12">
			{/* Navbar */}
			<Navbar
				setWeatherData={setData}
				setForecastData={setForecast}
			/>
			<div className="flex">
				{/* Left side */}
				<div className="w-[80%]">
					<div className="main-element">
						<div className="flex gap-10">
							<div className="flex flex-col ml-4">
								{data.data ? (
									<h1 className="temperature">
										{data.data[0].temp.toFixed()}°C
									</h1>
								) : null}

								<p className="date">{formattedDate}</p>
								{data.data ? (
									<p className="description">
										{data.data[0].weather.description}
									</p>
								) : null}
								{data.data ? (
									<img
										src={`icons/${data.data[0].weather.icon}.png`}
										alt="weather"
										className="weather-icon"
									/>
								) : null}
							</div>
							<div className="parts-of-day-container">
								<div className="parts-of-day morning">
									<p className="mx-4">Morning</p>
									<div className="flex items-center justify-between mx-4">
										<p className="text-[60px]">20°</p>
										<img
											src={Sun}
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
								{data.data ? (
									<p className="elements-units">
										{data.data[0].app_temp.toFixed()}°C
									</p>
								) : null}
							</div>
							<img
								src={Sun}
								alt=""
							/>
						</div>
						<div className="elements">
							<div className="mx-4 mt-4">
								<p className="elements-title">Wind</p>
								{data.data ? (
									<p className="elements-units">
										{data.data[0].wind_spd.toFixed()}m/s
									</p>
								) : null}
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

								{data.data ? (
									<p className="elements-units">
										{data.data[0].pres.toFixed()}mb
									</p>
								) : null}
							</div>
							<img
								src={Sun}
								alt=""
							/>
						</div>
						<div className="elements">
							<div className="mx-4 mt-4">
								<p className="elements-title">Humidity</p>

								{data.data ? (
									<p className="elements-units">{data.data[0].rh.toFixed()}%</p>
								) : null}
							</div>
							<img
								src={Sun}
								alt=""
							/>
						</div>
						<div className="elements">
							<div className="ml-4 mt-4">
								<p className="elements-title">Cloud coverage</p>
								{data.data ? (
									<p className="elements-units">{data.data[0].clouds}%</p>
								) : null}
							</div>
							<img
								src={Sun}
								alt=""
							/>
						</div>
						<div className="elements">
							<div className="ml-4 mt-4">
								<p className="elements-title">UV Index</p>
								{data.data ? (
									<p className="elements-units">{data.data[0].uv.toFixed()}</p>
								) : (
									<p className="elements-units">20°</p>
								)}
							</div>
							<img
								src={Sun}
								alt=""
							/>
						</div>
					</div>
					<div className="w-[95%] h-[15rem] my-10 graph">
						<p>GRAPH...</p>
					</div>
				</div>

				{/* Right side */}
				<Sidebar forecast={forecast} />
			</div>
		</div>
	);
}

export default Main;
