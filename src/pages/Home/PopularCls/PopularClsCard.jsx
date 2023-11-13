import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';

const PopularClsCard = ({ classItem }) => {
	const { darkMode } = useContext(DarkModeContext);
	const { _id, image, name, instructorName, availableSeats, fees, enrolled } =
		classItem;

	return (
		<div
			className={`card w-full  h-[350px] lg:w-10/12  rounded-lg mt-10 text-center mx-auto  ${
				darkMode ? 'bg-gray-800' : ' '
			}`}
		>
			<figure className="w-full h-[300px]">
				<img
					src={image}
					alt="photo"
					className="rounded-lg w-full h-full object-cover"
				/>
			</figure>

			<h2 className="text-tag-dark pt-2">{name}</h2>
		</div>
	);
};

export default PopularClsCard;
