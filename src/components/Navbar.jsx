import { React, useState } from "react";
import Logo from "../assets/logoku.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#2c2c2cff] text-white shadow-md">
			<div>
				<img
					className="rounded-full"
					src={Logo}
					alt="logo image"
					style={{ width: "50px" }}
				/>
			</div>
			{/* menu */}

			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* hamburger */}
			<div className="md:hidden z-10" onClick={handleClick}>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* mobile menu */}

			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900"
				}
			>
				<li className="py-6 texlxt-4">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 texlxt-4">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 texlxt-4">
					<Link
						onClick={handleClick}
						to="skills"
						hashSpy={true}
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 texlxt-4">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 texlxt-4">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social menu */}
			<div className="hidden fixed lg:flex flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex justify-between w-full items-center" href="/">
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex justify-between w-full items-center" href="/">
							GitHub
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex justify-between w-full items-center" href="/">
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex justify-between w-full items-center" href="/">
							Resume
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
