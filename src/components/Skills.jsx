import React from "react";
import { skillsData } from "../utils/data/skills";
import { skillsImage } from "../utils/skill-image";
import Marquee from "react-fast-marquee";

const Skills = () => {
	return (
		<div name="skills" className="bg-[#313131ff] text-white w-full">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center ">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#ffb633ff]">Skills</p>
					<p className="py-4">These are the technologies I've worked with</p>
				</div>

				<div className="w-full my-6">
					<Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
						{skillsData.map((skill, id) => (
							<div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={id}>
								<div className="w-full h-full transition-all duration-500 rounded-lg shadow-md shadow-black hover:scale-110">
									<div className="flex -translate-y-[1px] justify-center">
										<div className="w-3/4">
											<div className="h-[1px] w-full bg-[#313131ff]" />
										</div>
									</div>
									<div className="flex flex-col items-center justify-center gap-3 p-6">
										<div className="h-8 sm:h-10">
											<img src={skillsImage(skill)} alt={skill} width={40} height={40} className="w-auto h-full rounded-lg" />
										</div>
										<p className="text-sm text-white sm:text-lg">{skill}</p>
									</div>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default Skills;
