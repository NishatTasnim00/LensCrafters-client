import React from 'react';

const InstructorCard = ({ instructor }) => {
	const { photo, name, email } = instructor;
	// console.log(instructor);
	return (
		<div className="card border pt-8 rounded-lg mt-10 bg-gray-400 hover:shadow-lg shadow-inner shadow-4xl">
			<figure className="mx-auto h-24 w-24 rounded-full border-2 border-black shadow-2xl">
				<img className="h-24 w-24 rounded-full" src={photo} alt="user" />
			</figure>
			<div className="card-body items-center">
				<h2 className="card-title">{name}</h2>
				<p className="text-base opacity-60 text-neutral -mt-2">{email}</p>
				<div className="card-actions justify-end text-info font-semibold mt-5">
					<button className='btn btn-sm'>contact</button>
				</div>
			</div>
		</div>
	);
};

export default InstructorCard;
// shadow-[10px_10px_10px_10px_rgba(0, 0, 0, 0.5)]