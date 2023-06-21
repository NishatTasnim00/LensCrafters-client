import { useContext, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useGetUser from './useGetUser';

const useGetFees = () => {
	const [fees, setFees] = useState(null);
	const axiosSecure = useAxiosSecure();


	const handleGetFees = async (id) => {
		const { data: classData } = await axiosSecure.get(`/class/${id}`);
		setFees(classData.fees);

	};
		console.log(fees);

	
	return { fees, handleGetFees};
};

export default useGetFees;
