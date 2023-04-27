import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import WindIcon from "../assets/weather-icons/wind.png";
import FeelsLike from "../assets/weather-icons/feels-like.png";
import UVIndex from "../assets/weather-icons/UV-index.png";
import Humidity from "../assets/weather-icons/humidity.png";
import Pressure from "../assets/weather-icons/pressure.png";
import Cloud from "../assets/weather-icons/cloud.png";

function Main() {
	const [data, setData] = useState({});
	const [currentDate, setCurentDate] = useState(new Date());
	const [forecast, setForecast] = useState({});
	const [hourlyData, setHourlyData] = useState({});

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

	// filter the hourly data for morning, midday, and evening temperatures
	const morningData =
		hourlyData.data ??
		[].filter((hourData) => {
			const hour = Number(hourData.timestamp_local.slice(11, 13));
			return hour >= 6 && hour <= 9;
		});
	const middayData =
		hourlyData.data ??
		[].filter((hourData) => {
			const hour = Number(hourData.timestamp_local.slice(11, 13));
			return hour >= 11 && hour <= 14;
		});
	const eveningData =
		hourlyData.data ??
		[].filter((hourData) => {
			const hour = Number(hourData.timestamp_local.slice(11, 13));
			return hour >= 18 && hour <= 21;
		});

	// calculate the average temperature for morning, midday, and evening
	const getAverageTemperature = (dataArray) => {
		const sum = dataArray.reduce((acc, cur) => acc + cur.temp, 0);
		return (sum / dataArray.length).toFixed(0);
	};
	const morningTemperature = getAverageTemperature(morningData);
	const middayTemperature = getAverageTemperature(middayData);
	const eveningTemperature = getAverageTemperature(eveningData);

	return (
		<div className=" h-full mx-1 md:mx-4 lg:mx-8">
			{/* Navbar */}
			<Navbar
				setWeatherData={setData}
				setForecastData={setForecast}
				setHourlyData={setHourlyData}
			/>
			<div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row ">
				{/* Left side */}
				<div className="w-[100%] md:w-[80%] lg:w-[80%] ">
					<div className="main-element">
						<div className="flex flex-col md:flex  md:flex-row lg:flex lg:flex-row lg:gap-10">
							<div className="flex flex-col md:mt-4 md:flex-col lg:flex-col ml-4">
								{data.data ? (
									<h1 className="temperature">
										{data.data[0].temp.toFixed()}°C
									</h1>
								) : null}
								<div className="flex flex-row items-center md:flex-col lg:flex lg:flex-col">
									<div>
										<p className="date">{formattedDate}</p>
										{data.data ? (
											<p className="description">
												{data.data[0].weather.description}
											</p>
										) : null}
									</div>

									{data.data ? (
										<img
											src={`icons/${data.data[0].weather.icon}.png`}
											alt="weather"
											className="weather-icon"
										/>
									) : null}
								</div>
							</div>
							<div className="parts-of-day-container">
								<div className="parts-of-day morning">
									<p className="mx-1 text-center lg:mx-4 ">Morning</p>
									<div className="flex items-center justify-between mx-1 lg:mx-4">
										<div>
											<p className="text-[30px] lg:text-[50px]">
												{morningTemperature}°
											</p>
											{hourlyData.data ? (
												<p className="part-of-day-desc">
													{hourlyData.data[12].weather.description}
												</p>
											) : null}
										</div>
										{hourlyData.data ? (
											<img
												src={`icons/${hourlyData.data[8].weather.icon}.png`}
												alt="weather"
												className="part-of-day-icon"
											/>
										) : null}
									</div>
								</div>
								<div className="parts-of-day midday">
									<p className="mx-1 text-center lg:mx-4">Midday</p>

									<div className="flex items-center justify-between mx-1 lg:mx-4">
										<div>
											<p className="text-[30px] lg:text-[50px]">
												{middayTemperature}°
											</p>
											{hourlyData.data ? (
												<p className="part-of-day-desc">
													{hourlyData.data[12].weather.description}
												</p>
											) : null}
										</div>

										{hourlyData.data ? (
											<img
												src={`icons/${hourlyData.data[12].weather.icon}.png`}
												alt="weather"
												className="part-of-day-icon"
											/>
										) : null}
									</div>
								</div>
								<div className="parts-of-day evening">
									<p className="mx-1 text-center lg:mx-4">Evening</p>
									<div className="flex items-center justify-between mx-1 lg:mx-4">
										<div>
											<p className="text-[30px] lg:text-[50px]">
												{eveningTemperature}°
											</p>
											{hourlyData.data ? (
												<p className="part-of-day-desc">
													{hourlyData.data[20].weather.description}
												</p>
											) : null}
										</div>
										{hourlyData.data ? (
											<img
												src={`icons/${hourlyData.data[20].weather.icon}.png`}
												alt="weather"
												className="part-of-day-icon"
											/>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 md:w-[95%] lg:gap-10 mt-4 w-[100%] lg:w-[95%] lg:pt-6">
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">Feels like</p>
								{data.data ? (
									<p className="elements-units">
										{data.data[0].app_temp.toFixed()}°C
									</p>
								) : null}
							</div>
							<img
								src={FeelsLike}
								alt="weather"
								className="elements-icon"
							/>
						</div>
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">Wind</p>
								{data.data ? (
									<p className="elements-units">
										{data.data[0].wind_spd.toFixed()}m/s
									</p>
								) : null}
							</div>
							<img
								src={WindIcon}
								alt="weather"
								className="elements-icon"
							/>
						</div>
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">Pressure</p>

								{data.data ? (
									<p className="elements-units">
										{data.data[0].pres.toFixed()}mb
									</p>
								) : null}
							</div>
							<img
								src={Pressure}
								alt="weather"
								className="elements-icon"
							/>
						</div>
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">Humidity</p>

								{data.data ? (
									<p className="elements-units">{data.data[0].rh.toFixed()}%</p>
								) : null}
							</div>
							<img
								src={Humidity}
								alt="weather"
								className="elements-icon"
							/>
						</div>
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">Cloud Cover</p>
								{data.data ? (
									<p className="elements-units">{data.data[0].clouds}%</p>
								) : null}
							</div>
							<img
								src={Cloud}
								alt="weather"
								className="h-[50%] lg:h-[80%]"
							/>
						</div>
						<div className="elements">
							<div className="elements-content">
								<p className="elements-title">UV Index</p>
								{data.data ? (
									<p className="elements-units">{data.data[0].uv.toFixed()}</p>
								) : (
									<p className="elements-units">20°</p>
								)}
							</div>
							<img
								src={UVIndex}
								alt="weather"
								className="elements-icon"
							/>
						</div>
					</div>
				</div>

				{/* Right side */}
				<Sidebar
					forecast={forecast}
					weatherData={data}
				/>
			</div>
		</div>
	);
}

export default Main;
