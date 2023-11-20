import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import InstructorCard from './InstructorCard';
import Title from '../../component/Title/Title';

const Instructors = () => {

		const { user, loading } = useContext(AuthContext);
		const axiosSecure = useAxiosSecure();
		// console.log(instructor);
		const { data: instructors = [], refetch } = useQuery({
			queryKey: ['instructors', user?.email],
			enabled: !loading,
			queryFn: async () => {
				const result = await axiosSecure.get('/instructors');
				return result.data;
			},
		});
    return (
			<div className="container lg:py-20">
				<Title heading={"Instructors"} subheading={'Learn Photography with legend'}></Title>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
					{instructors?.map((instructor) => (
						<InstructorCard
							key={instructor._id}
							instructor={instructor}
						></InstructorCard>
					))}
				</div>
			</div>
		);
};

export default Instructors;

