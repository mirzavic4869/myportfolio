import { React, useState } from "react";
import Logo from "../assets/logoku.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#2c2c2cff] text-white shadow-md">
			<div>
				<img className="rounded-full" src={Logo} alt="Logo" style={{ width: "50px" }} />
			</div>
			{/* menu */}

			<ul className="hidden md:flex">
				<li className="hover:text-[#ffb633ff]">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="hover:text-[#ffb633ff]">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="hover:text-[#ffb633ff]">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="hover:text-[#ffb633ff]">
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="hover:text-[#ffb633ff]">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* hamburger */}
			<div className="z-10 md:hidden" onClick={handleClick}>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* mobile menu */}

			<ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900"}>
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
					<Link onClick={handleClick} to="skills" hashSpy={true} smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 texlxt-4">
					<Link onClick={handleClick} to="projects" smooth={true} duration={500}>
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
						<a className="flex items-center justify-between w-full" href="https://www.linkedin.com/in/mirzam-avicena-601a71152/">
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex items-center justify-between w-full" href="https://github.com/mirzavic4869">
							GitHub
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex items-center justify-between w-full" href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=avicenamirzam@gmail.com">
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffb633ff]">
						<a className="flex items-center justify-between w-full" href="https://drive.google.com/file/d/19WI3HtnCNL4vQ4CtKtpPcjAUmhM7NvRo/view?usp=sharing">
							Resume
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
			<div className="fixed bottom-0 right-0 flex-col hidden lg:flex">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[10px] duration-300 bg-[#4fce5d]">
						<a className="flex items-center justify-between w-full" href="https://wa.me/6282138793602">
							<FaWhatsapp size={30} />
							WhatsApp
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
