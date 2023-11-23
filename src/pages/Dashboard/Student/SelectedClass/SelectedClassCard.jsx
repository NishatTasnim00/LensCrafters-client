import React, { useContext, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import PaymentModal from '../../Payment/PaymentModal';
import useGetUser from '../../../../hooks/useGetUser';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useClasses from '../../../../hooks/useClasses';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';

const SelectedClassCard = ({ bookClass, refetch, handleDeleteClass }) => {
	const { userData } = useGetUser();
	const { _id, image, name, instructorName, availableSeats, fees, email } =
		bookClass;
	// console.log(bookClass);



	return (
		<div className="card card-side bg-gray-400 shadow-xl rounded-lg h-64 ">
			<figure className="w-4/12">
				<img className="h-full w-full object-cover" src={image} alt="Movie" />
			</figure>
			<div className="card-body relative">
				<button
					onClick={() => {
						handleDeleteClass(userData._id, _id);
						refetch();
					}}
					className="absolute right-10 tooltip hover:text-red-700"
					data-tip="Delete Class from your listing"
				>
					<AiFillDelete size={30} />
				</button>
				<h2 className="text-tag">
					<span className="">Course :</span> {name}
				</h2>
				<h2 className="text-tag">
					<span>Instructor : </span>
					{instructorName}
				</h2>
				<h2 className="text-tag">
					<span>Available Seats : </span>
					{availableSeats}
				</h2>
				<p className="text-price">
					<span>Cost : </span>${fees}
				</p>
				<div className="card-actions justify-end">
					<PaymentModal
						className={name}
						classId={_id}
						classImage={image}
						fees={fees}
					></PaymentModal>
				</div>
			</div>
		</div>
	);
};

export default SelectedClassCard;
