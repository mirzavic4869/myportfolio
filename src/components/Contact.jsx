import React from "react";

const Contact = () => {
	return (
		<div className="w-full h-screen bg-slate-900 flex justify-center">
			<form
				method="POST"
				action="https://getform.io/f/9b76b8bf-2270-4906-988a-647a5095de91"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8 text-white">
					<p className="text-4xl font-bold inline border-b-4 border-white">
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
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-white border-2 border-white px-4 py-3 mx-auto my-8 hover:bg-yellow-600 hover:border-yellow-600 flex items-center">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
