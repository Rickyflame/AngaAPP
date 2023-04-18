import React from "react";
import Navbar from "./Navbar";

export default function Main() {
	return (
		<div className="flex-grow w-4/5 h-full overflow-y-scroll">
			<Navbar />
			<div className="main-element">
				<div className="flex gap-10">
					<div className="flex flex-col ml-4">
						<h1 className=" font-bold text-[100px]">25</h1>
						<p>15 April 2022</p>
						<p>Sunny, clear skys</p>
					</div>
					<div className="flex items-center gap-6 mt-8">
						<div className="parts-of-day bg-yellow-300">
							<p>Morning</p>
							<p>20</p>
						</div>
						<div className="parts-of-day bg-yellow-300">
							<p>Midday</p>
							<p>20</p>
						</div>
						<div className="parts-of-day bg-slate-600">
							<p>Evening</p>
							<p>20</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-5 mt-4">
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
				<div className="elements">
					<p>Feels like</p>
					<p>23</p>
				</div>
			</div>
			<div className="w-[95%] h-[15rem] bg-[#302579] my-10">
				<p>GRAPH...</p>
			</div>
		</div>
	);
}
