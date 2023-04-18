import React from "react";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<h1 className="font-bold text-[38px] text-[#24142c]">AngaAPP</h1>
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
