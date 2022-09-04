import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div className="bg-slate-500 w-full h-screen">
			{/* container */}
			<div className="flex flex-col justify-center max-w-[1000px] mx-auto px-8 h-full">
				<p className="text-gray-300">Hi! My name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-slate-900">
					Mirzam Avicena
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-slate-800">
					I'm Front-End Engineer
				</h2>
				<p className="text-gray-300 max-w-[700px] py-4">
					I graduated in Front-End Engineering. Immersive Program at Alterra
					Academy. I have work experience as a graphic designer, that's why I'm
					interested in IT, especially the Front-End Engineering.{" "}
				</p>
				<div>
					<button className="group text-white border-2 hover:bg-slate-900 hover:border-slate-900 py-3 px-6 my-3 flex items-center ">
						View Work{" "}
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
