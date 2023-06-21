import React, { useContext } from 'react';
import PopularInstructorCard from './PopularInstructorCard';
import Title from '../../../component/Title/Title';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';
import { useQuery } from '@tanstack/react-query';

const PopularInstructors = () => {
	const { darkMode } = useContext(DarkModeContext);
	const { user, loading } = useContext(AuthContext);
	const axiosSecure = useAxiosSecure();
	const { data: instructors = [], refetch } = useQuery({
		Query: ['instructors', user?.email],

		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSecure.get('/instructors');
			return result.data;
		},
	});
console.log(instructors);
	return (
		<div className="container">
			<Title heading={'Popular Instructor'}></Title>
			<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-10">
				{instructors.slice(0, 6).map((instructor) => (
					<PopularInstructorCard
						key={instructor._id}
						instructor={instructor}
					></PopularInstructorCard>
				))}
			</div>
		</div>
	);
};

export default PopularInstructors;
