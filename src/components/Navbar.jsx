import { React, useState } from "react";
import Logo from "../assets/logoku.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white">
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
				<li>Home</li>
				<li>About</li>
				<li>Skill</li>
				<li>Experience</li>
				<li>Contact</li>
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
				<li className="py-6 texlxt-4">Home</li>
				<li className="py-6 texlxt-4">About</li>
				<li className="py-6 texlxt-4">Skill</li>
				<li className="py-6 texlxt-4">Experience</li>
				<li className="py-6 texlxt-4">Contact</li>
			</ul>

			{/* social menu */}
			<div className="hidden fixed lg:flex flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500">
						<a className="flex justify-between w-full items-center" href="/">
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500">
						<a className="flex justify-between w-full items-center" href="/">
							GitHub
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500">
						<a className="flex justify-between w-full items-center" href="/">
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500">
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
