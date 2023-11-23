import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import FeedbackModal from './FeedbackModal';
import { toast } from 'react-hot-toast';


const ManageClassesCard = ({
	singleClass,
	handleUpdateStatus,
}) => {
	const axiosSecure =useAxiosSecure()
	let [isOpen, setIsOpen] = useState(false);
	const {
		_id,
		image,
		name,
		instructorName,
		email,
		availableSeats,
		fees,
		status,
	} = singleClass;

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	const handleSendFeedback = (_id, feedback) => {
		console.log(feedback);
		const updatedData = {
			feedback: feedback,
		};

		axiosSecure
			.patch(`/allClasses/${_id}`, updatedData)
			.then((response) => {
				console.log('Class updated:', response.data);
				if(response.data.modifiedCount>0){
					toast.success("Feedback sent!")
					closeModal()
				}
			})
			.catch((error) => {
				console.error('Error updating class:', error);
			});
	};

	return (
		<div className="card rounded-sm card-side shadow-xl w-full h-80">
			<figure className="w-4/12">
				<img className="h-full w-full object-cover " src={image} alt="photo" />
			</figure>
			<div className="p-10 bg-accent bg-opacity-80 text-base-100 w-8/12">
				<h2 className="card-title capitalize">{name}</h2>
				<p className="capitalize">Conducted by : {instructorName}</p>
				<p>Contact : {email}</p>
				<p>Course Cost : ${fees}</p>
				<p>Available seats : {availableSeats}</p>
				<p>
					Current Status : <span className="capitalize">{status}</span>
				</p>

				<div className="card-actions justify-end mt-16">
					<button
						onClick={() => {
							handleUpdateStatus(_id, 'approved');
						}}
						className="btn btn-primary w-3/12"
						disabled={status === 'pending' ? false : true}
					>
						Approve
					</button>
					<button
						onClick={() => {
							handleUpdateStatus(_id, 'denied');
						}}
						className="btn btn-primary w-3/12"
						disabled={status === 'pending' ? false : true}
					>
						Deny
					</button>
					{/* The button to open modal */}
					<button
						onClick={() => {
							openModal();
						}}
						className="btn btn-primary w-3/12"
					>
						Feedback
					</button>
					<FeedbackModal
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						_id={_id}
						handleSendFeedback={handleSendFeedback}
						closeModal={closeModal}
					></FeedbackModal>
					{/* <div className="fixed inset-0 flex items-center justify-center">
						<button
							type="button"
							onClick={openModal}
							className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							Open dialog
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ManageClassesCard;
