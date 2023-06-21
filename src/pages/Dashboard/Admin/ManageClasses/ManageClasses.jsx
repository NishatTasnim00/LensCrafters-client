import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import ManageClassesCard from './ManageClassesCard';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Title from '../../../../component/Title/Title';

const ManageClasses = () => {
	const { user, loading } = useContext(AuthContext);
	const axiosSecure = useAxiosSecure();
	const { data: allClasses = [], refetch } = useQuery({
		queryKey: ['allClasses', user?.email],
		enabled: !loading,
		queryFn: async () => {
			if (!user) {
				return [];
			}
			const result = await axiosSecure.get(`/allClasses`);
			console.log(result?.data);
			return result.data;
		},
	});
    const handleUpdateStatus = (_id, status) => {
			axiosSecure
				.patch(`/allClasses/${_id}`, { status: status })
				.then((response) => {
					if (response.data.modifiedCount > 0) {
						refetch();
					}
				})
				.catch((error) => {
					console.error('Error updating class:', error);
				});
		};

		

	return (
		<div className="">
			<Title heading={'All classes at a glance'}></Title>
			<div className="w-10/12 space-y-8 mx-auto">
				{allClasses.map((singleClass) => (
					<ManageClassesCard
						handleUpdateStatus={handleUpdateStatus}
						key={singleClass._id}
						singleClass={singleClass}
					></ManageClassesCard>
				))}
			</div>
		</div>
	);
};

export default ManageClasses;
