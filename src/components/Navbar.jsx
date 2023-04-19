import React from "react";
import "../App.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="">
				<h1 className="logo">AngaAPP</h1>
			</div>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search"
				/>
			</div>
			<div className="location-container bg-slate-600">
				<h1>Location</h1>
			</div>
		</div>
	);
}
