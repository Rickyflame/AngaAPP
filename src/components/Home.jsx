import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Home() {
	return (
		<div className="home-container flex h-screen mx-12">
			<Main />
			<Sidebar />
		</div>
	);
}
