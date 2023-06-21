import React, { useContext } from 'react';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';

const PopularInstructorCard = ({ instructor, hello }) => {
	const { darkMode } = useContext(DarkModeContext);
	const { photo, name, email } = instructor;

	return (
		<div
			className={`card w-full  shadow-lg rounded-sm mt-10  ${
				darkMode ? 'bg-gray-800 text-white' : ' '
			}`}
		>
			<figure className="h-32 w-32 mx-auto rounded-full mt-8 shadow-lg">
				<img
					className="h-32 w-32 rounded-full hover:scale-125"
					src={photo}
					alt="user"
				/>
			</figure>
			<div className="card-body items-center">
				<h2 className="card-title">{name}</h2>
				<p className="text-base opacity-60 -mt-2">{email}</p>
				<div className="card-actions justify-end text-info font-semibold mt-5"></div>
			</div>
		</div>
	);
};

export default PopularInstructorCard;
