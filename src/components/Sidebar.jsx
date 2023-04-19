import React from "react";

export default function Sidebar() {
	return (
		<div className="w-1/5 h-full right-0 top-0 bottom-0 ">
			<div className="days-container h-[70vh]">
				<div className="day h-16">
					<h2>Sunday</h2>
				</div>
				<div className="day h-16">
					<h2>Monday</h2>
				</div>
				<div className="day h-16">
					<h2>Tuesday</h2>
				</div>
				<div className="day h-16">
					<h2>Wednesday</h2>
				</div>
				<div className="day h-16">
					<h2>Thursday</h2>
				</div>
				<div className="day h-16">
					<h2>Friday</h2>
				</div>
				<div className="day h-16">
					<h2>Saturday</h2>
				</div>
			</div>
			<div className="h-[10rem] mt-4 sunset-sunrise">
				<h1>SUNRISE & SUNSET</h1>
			</div>
		</div>
	);
}
