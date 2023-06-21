import { useRef } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFeedback = () => {
	const feedbackRef = useRef(null);
	const axiosSecure = useAxiosSecure();
  
	const handleSendFeedback = (_id) => {
		const feedback = feedbackRef?.current?.value;
		console.log(feedback);
		const updatedData = {
			feedback: feedback,
		};

		axiosSecure
			.patch(`/allClasses/${_id}`, updatedData)
			.then((response) => {
				console.log('Class updated:', response.data);
			})
			.catch((error) => {
				console.error('Error updating class:', error);
			});
	};

	const handleUpdateStatus = (_id, status) => {
	
		axiosSecure
			.patch(`/allClasses/${_id}`, { status: status })
			.then((response) => {
				console.log('Class updated:', response.data);
			})
			.catch((error) => {
				console.error('Error updating class:', error);
			});
	};

	

	return [feedbackRef, handleSendFeedback, handleUpdateStatus];
};

export default useFeedback;
