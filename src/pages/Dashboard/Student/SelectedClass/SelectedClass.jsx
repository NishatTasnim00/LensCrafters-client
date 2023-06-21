import React, { useState, useEffect, useContext } from 'react';
import useGetUser from '../../../../hooks/useGetUser';
import useClasses from '../../../../hooks/useClasses';
import SelectedClassCard from './SelectedClassCard';
import Title from '../../../../component/Title/Title';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider';

const SelectedClass = () => {
	const { user, loading } = useContext(AuthContext);
	const axiosSecure = useAxiosSecure();
	const { userData } = useGetUser();
	const { data: bookedClasses = [], refetch } = useQuery({
		queryKey: ['bookedClass', userData?.email],
		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSecure.get(`/bookedClasses/${user?.email}`);
			console.log(user?.email);
			return result.data;
		},
	});
	// console.log(bookedClasses);

	const handleDeleteClass = async (userId, classId) => {
		console.log(userId, classId);
		const updateDoc = {
			userId: userId,
			classId: classId,
		};
		console.log(updateDoc);

		await axiosSecure.post(`/deleteClass`, updateDoc).then((result) => {
			if (result.data.modifiedCount > 0) {
				toast.success('Class deleted successfully');
				refetch();
			}
		});
	};

	return (
		<div className="container">
			<Title
				heading={'Courses to Enroll Later'}
				subheading={`You have selected ${bookedClasses.length} courses`}
			></Title>
			<div className="space-y-5 w-10/12 mx-auto">
				{bookedClasses.map((bookClass) => (
					<SelectedClassCard
						key={bookClass._id}
						bookClass={bookClass}
						refetch={refetch}
						handleDeleteClass={handleDeleteClass}
					></SelectedClassCard>
				))}
			</div>
		</div>
	);
};

export default SelectedClass;
