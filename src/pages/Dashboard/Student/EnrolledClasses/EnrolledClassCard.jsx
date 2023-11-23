import { data } from 'autoprefixer';
import React from 'react';

const EnrolledClassCard = ({ enrolledClass }) => {
    const{className, cost, date, classImage } = enrolledClass;
	
	return (
		<div className="card w-full rounded-lg bg-gray-400 shadow-xl border-gray-300 border-2">
			<div className="card-body">
				<h2 className="card-title h-12">{className}</h2>
				<p>Enroll Date: {date.slice(0,10)}</p>
				<p className='text-price'>Course Fees : $ {cost}</p>
			
			</div>
			<figure className="h-80 w-full">
				<img className="h-80 w-full object-cover" src={classImage} alt="" />
			</figure>
		</div>
	);
};

export default EnrolledClassCard;