import React from "react";
import Sunrise from "../assets/weather-icons/sunrise.png";
import Sunset from "../assets/weather-icons/sunset.png";

function SunriseSunset({ weatherData }) {
	return (
		<div className="sunrise-sunset">
			<div className="sunrise-sunset-wrapper">
				<div className="sunrise-sunset-wrapper-1">
					<div className="flex items-center">
						<img
							src={Sunrise}
							alt="weather"
							className="sunrise-sunset-icon"
						/>
						<p className="sunrise-sunset-title">Sunrise</p>
					</div>
					{weatherData.data ? (
						<p className="sunrise-sunset-time">
							{weatherData.data[0].sunrise} AM
						</p>
					) : null}
				</div>
				<div className="sunrise-sunset-wrapper-2">
					<div className="flex items-center">
						<img
							src={Sunset}
							alt="weather"
							className="sunrise-sunset-icon"
						/>
						<p className="sunrise-sunset-title">Sunset</p>
					</div>
					{weatherData.data ? (
						<p className="sunrise-sunset-time">
							{weatherData.data[0].sunset} PM
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default SunriseSunset;
