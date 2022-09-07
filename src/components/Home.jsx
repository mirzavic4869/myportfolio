import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div name="home" className="bg-[#313131ff] w-full h-screen">
			{/* container */}
			<div className="flex flex-col justify-center max-w-[1000px] mx-auto px-8 h-full">
				<p className="text-white">Hi! My name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ffb633ff]">
					Mirzam Avicena
				</h1>
				<h2 className="text-2xl  text-[#ffb633ff]">I'm Front-End Engineer</h2>
				<p className="text-white max-w-[700px] py-4">
					I graduated in Front-End Engineering. Immersive Program at Alterra
					Academy. I have work experience as a graphic designer, that's why I'm
					interested in IT, especially the Front-End Engineering.{" "}
				</p>
				<div>
					<button className="group text-white border-2 hover:bg-[#ffb633ff] hover:border-[#ffb633ff] py-3 px-6 my-3 flex items-center ">
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
