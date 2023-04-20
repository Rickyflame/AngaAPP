import React, { useState } from "react";
import "../App.css";

export default function Current({ data }) {
	return (
		<div className="main-element">
			<div className="flex gap-10">
				<div className="flex flex-col ml-4">
					<div className="">
						<h1>{data.city}</h1>
					</div>
					<h1 className=" font-bold text-[100px]">25</h1>
					<p>15 April 2022</p>
					<p>{data.weather[0].description}</p>
				</div>
				<div className="flex items-center gap-6 mt-8">
					<div className="parts-of-day morning">
						<p>Morning</p>
						<p>20</p>
					</div>
					<div className="parts-of-day midday">
						<p>Midday</p>
						<p>20</p>
					</div>
					<div className="parts-of-day evening">
						<p>Evening</p>
						<p>20</p>
					</div>
				</div>
			</div>
		</div>
	);
}
