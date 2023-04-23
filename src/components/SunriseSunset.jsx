import React from "react";
import Sunrise from "../assets/weather-icons/sunrise.png";
import Sunset from "../assets/weather-icons/sunset.png";

function SunriseSunset({ weatherData }) {
	return (
		<div className="sunrise-sunset">
			<p className="sunrise-sunset-heading">Sunrise & Sunset</p>
			<div className="sunrise-sunset-wrapper">
				<div className="sunrise-sunset-wrapper-1">
					<img
						src={Sunrise}
						alt="weather"
						className="sunrise-sunset-icon"
					/>
					<div>
						<p className="sunrise-sunset-title">Sunrise</p>
						{weatherData.data ? (
							<p className="sunrise-sunset-time">
								{weatherData.data[0].sunrise} AM
							</p>
						) : null}
					</div>
				</div>
				<div className="sunrise-sunset-wrapper-2">
					<img
						src={Sunset}
						alt="weather"
						className="sunrise-sunset-icon"
					/>
					<div>
						<p className="sunrise-sunset-title">Sunset</p>
						{weatherData.data ? (
							<p className="sunrise-sunset-time">
								{weatherData.data[0].sunset} PM
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SunriseSunset;
