import axios from 'axios';
import { toast } from 'react-hot-toast';


export const handleBookClass = async (userId, classId) => {
		const updateDoc = {
			userId: userId,
			classId: classId,
		};
		
		await axios
			.post(`${import.meta.env.VITE_API_URL}/bookClass`, updateDoc, {
				headers: {
					'content-type': 'application/json',
				},
			})
			.then((result) => {
				toast.success(result.data.message);
			})
			.catch((error) => toast.error(error?.response?.data?.message));
	};


