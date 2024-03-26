import React from "react";
import Middleman from "../assets/Middleman.png";
import AppsecAsia from "../assets/appsec-asia.png";
import Halalanft from "../assets/halalanft.png";

const Projects = () => {
	return (
		<div name="projects" className="bg-[#2c2c2cff] w-full h-full text-white">
			<div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#ffb633ff]">Projects</p>
					<p className="py-4">Check out of my recent projects</p>
				</div>

				{/* Container */}
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${Middleman}` }} className="container flex items-center justify-center mx-auto rounded-md shadow-lg shadow-black group content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold tracking-wider text-white">Next JS Apllication</span>
							<div className="pt-8 text-center">
								<a href="https://middleman-alta.vercel.app/">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
								</a>
								<a href="https://github.com/mirzavic4869/middleman">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${AppsecAsia}` }} className="container flex items-center justify-center mx-auto rounded-md shadow-lg shadow-black group content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold tracking-wider text-white">Next JS Apllication</span>
							<div className="pt-8 text-center">
								<a href="https://appsec-asia.netlify.app/">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
								</a>
								<a href="https://github.com/mirzavic4869/appsec-asia">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${Halalanft}` }} className="container flex items-center justify-center mx-auto rounded-md shadow-lg shadow-black group content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold tracking-wider text-white">Next JS Apllication</span>
							<div className="pt-8 text-center">
								<a href="https://www.halalanft.com/">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
								</a>
								<a href="/">
									<button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
