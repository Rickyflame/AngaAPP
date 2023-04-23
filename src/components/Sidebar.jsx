import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";
import SunriseSunset from "./SunriseSunset";

function Sidebar({ forecast, weatherData }) {
	const DAYS_OF_WEEK = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const dayInAWeek = new Date().getDay();

	const forecastDays = DAYS_OF_WEEK.slice(
		dayInAWeek,
		DAYS_OF_WEEK.length
	).concat(DAYS_OF_WEEK.slice(0, dayInAWeek));

	return (
		<div className="w-[20%] h-full">
			<div className="sidebar">
				<label className="title">Daily Forecast</label>
				<Accordion allowZeroExpanded>
					{forecast?.data?.slice(0, 7).map((item, index) => (
						<AccordionItem key={index}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<div className="daily-item">
										<label className="day">{forecastDays[index]}</label>

										<img
											src={`icons/${item.weather.icon}.png`}
											alt="weather"
											className="forecast-icon"
										/>
										<label className="forecast-desc">
											{item.weather.description}
										</label>
									</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<div className="daily-details">
									<div className="daily-details-item">
										<label className="daily-details-name">Feels like:</label>
										<label className="daily-details-unit">
											{item.app_max_temp.toFixed()}°C
										</label>
									</div>
									<div className="daily-details-item">
										<label className="daily-details-name">Pressure:</label>
										<label className="daily-details-unit">
											{item.pres.toFixed()}mb
										</label>
									</div>
									<div className="daily-details-item">
										<label className="daily-details-name">Humidity:</label>
										<label className="daily-details-unit">{item.rh}%</label>
									</div>
									<div className="daily-details-item">
										<label className="daily-details-name">Wind speed:</label>
										<label className="daily-details-unit">
											{item.wind_spd.toFixed()}m/s
										</label>
									</div>
									<div className="daily-details-item">
										<label className="daily-details-name">Clouds:</label>
										<label className="daily-details-unit">{item.clouds}%</label>
									</div>
									<div className="daily-details-item">
										<label className="daily-details-name">UV index:</label>
										<label className="daily-details-unit">
											{item.uv.toFixed()}%
										</label>
									</div>
								</div>
							</AccordionItemPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>
			<SunriseSunset weatherData={weatherData} />
		</div>
	);
}

export default Sidebar;
