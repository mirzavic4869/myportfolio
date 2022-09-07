import { React, useState } from "react";

const Contact = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div
			id="contact"
			className="w-full h-screen bg-[#313131ff] flex justify-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/9b76b8bf-2270-4906-988a-647a5095de91"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8 text-white">
					<p className="text-4xl font-bold inline border-b-4 border-[#ffb633ff]">
						Contact
					</p>
					<p className="py-4">
						// Submit the form bellow or shoot me on email -
						avicenamirzam@gmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Fullname"
					name="fullname"
					onChange={(e) => setFullname(e.target.value)}
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="text"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button
					disabled={fullname === "" || email === "" ? true : false}
					type="submit"
					className="cursor-pointer text-white border-2 border-white px-4 py-3 mx-auto my-8 hover:bg-[#ffb633ff] hover:border-[#ffb633ff] flex items-center "
				>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
