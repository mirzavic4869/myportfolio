import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import Next from "../assets/next.png";
import Figma from "../assets/figma.png";

const Skills = () => {
	return (
		<div
			name="skills"
			className="bg-[#313131ff] text-white w-full h-full lg:h-screen"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center ">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#ffb633ff]">
						Skills
					</p>
					<p className="py-4">// These are the technologies I've worked with</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-2">HTML</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-2">CSS</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img
							className="w-20 mx-auto"
							src={Javascript}
							alt="Javascript icon"
						/>
						<p className="my-2">JAVASCRIPT</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
						<p className="my-2">TAILWIND</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img
							className="w-20 mx-auto"
							src={Bootstrap}
							alt="Bootstrap icon"
						/>
						<p className="my-2">BOOTSTRAP</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={react} alt="react icon" />
						<p className="my-2">REACT JS</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={Next} alt="nextjs icon" />
						<p className="my-2">NEXT JS</p>
					</div>
					<div className="shadow-md shadow-black hover:scale-110 duration-500 p-4">
						<img className="w-20 mx-auto" src={Figma} alt="Figma icon" />
						<p className="my-2">FIGMA</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
