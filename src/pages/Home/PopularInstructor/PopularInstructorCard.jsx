import React, { useContext } from 'react';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';

const PopularInstructorCard = ({ instructor, hello }) => {
	const { darkMode } = useContext(DarkModeContext);
	const { photo, name, email } = instructor;

	return (
		// <div
		// 	className={`card w-full mx-auto  shadow-lg rounded-lg mt-10 text-gray-300 ${
		// 		darkMode ? 'bg-accent' : 'bg-accent bg-opacity-80' 
		// 	}`}
		// >
		// 	<figure className="h-96 w-64 mx-auto rounded-full mt-12 shadow-lg">
		// 		<img
		// 			className="h-96 w-64 rounded-full hover:scale-125"
		// 			src={photo}
		// 			alt="user"
		// 		/>
		// 	</figure>
		// 	<div className="card-body items-center">
		// 		<h2 className="card-title">{name}</h2>
		// 		<p className="text-base opacity-60 -mt-2">{email}</p>
		// 		<div className="card-actions justify-end text-info font-semibold mt-5"></div>
		// 	</div>
		// </div>



		<div
			className="card w-full mx-auto  shadow-lg rounded-lg mt-10 text-gray-300 relative"
		>
			<figure className="h-[400px] w-full rounded-lg shadow-lg">
				<img
					className="h-[400px] w-full rounded-lg object-cover"
					src={photo}
					alt="user"
				/>
			</figure>
			<div className="h-[400px] w-full rounded-lg card-body  absolute top-0 bg-black opacity-0 hover:opacity-70">

			<div className='h-[400px] w-full rounded-lg flex justify-center items-center'>
				<div>
				<h2 className="font-extrabold text-3xl">{name}</h2>
				<p className="text-base opacity-60 text-center">{email}</p>
				</div>
			</div>
			</div>
		</div>
	);
};

export default PopularInstructorCard;
