import { data } from 'autoprefixer';
import React from 'react';

const EnrolledClassCard = ({ enrolledClass }) => {
    const{className, cost, date, classImage } = enrolledClass;
	
	return (
		<div className="card w-full rounded-sm bg-base-100 shadow-xl border-gray-300 border-2">
			<div className="card-body">
				<h2 className="card-title h-12">{className}</h2>
				<p>Course Fees : $ {cost}</p>
				<p>Enroll Date: {date.slice(0,10)}</p>
			</div>
			<figure className="h-56">
				<img className="object-cover" src={classImage} alt="" />
			</figure>
		</div>
	);
};

export default EnrolledClassCard;