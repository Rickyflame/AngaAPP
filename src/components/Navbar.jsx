import React from "react";
import "../App.css";
import Search from "./Search";

export default function Navbar() {

	const handleOnSearchChange = (searchData) => {
		console.log(searchData);
	}

	return (
		<div className="navbar">
			<div className="">
				<h1 className="logo">AngaAPP</h1>
			</div>
			<Search onSearchChange={handleOnSearchChange}/>
			<div className="location-container bg-slate-600">
				<h1>Location</h1>
			</div>
		</div>
	);
}
