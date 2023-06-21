import React, { useContext } from 'react';
import useGetUser from './useGetUser';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
	const axiosSecure = useAxiosSecure();
	const { user, loading } = useContext(AuthContext);
	const { userData } = useGetUser();
	const { data: classes = [], refetch } = useQuery({
		queryKey: ['classes', user?.email],
		enabled: !loading,
		queryFn: async () => { 
			if( !user ){ 
				return []
			}
			const result = await axiosSecure.get(`/classes`);
			return result.data;
		},
	});

	return [ classes, refetch ];
};

export default useClasses;