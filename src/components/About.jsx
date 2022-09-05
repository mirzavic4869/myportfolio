import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full
        h-screen bg-slate-900 text-white"
		>
			<div className="flex flex-col justify-center items-center w-full h-full ">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4 sm:pl-8">
						<p className="text-4xl font-bold inline border-b-4 border-white">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right">
						<p>
							For about 3 months at Alterra Academy, I have attended Javascript
							programming language training, ReactJs, and NextJS framework,
							HTML, CSS, Bootstrap, and Tailwind.
						</p>
					</div>
					<div>
						<p>
							I have also created projects like Social Media, E-Store, and
							E-Commerce application. Currently, I am looking to new
							opportunities, offered professional challenges which I can face
							with my technical and interpersonal skills, at the same time I can
							grow as a person and develop myself to be a good Front-End
							engineer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
