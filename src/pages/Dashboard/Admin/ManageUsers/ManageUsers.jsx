import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUsersCard from './ManageUsersCard';
import Title from '../../../../component/Title/Title';

const ManageUsers = () => {
	const { user, loading } = useContext(AuthContext);
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ['users', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSecure.get('/users');
			return result.data;
		},
	});

	const handleUpdateRole = (email, role) => {
		const updatedData = { email: email, role: role };
		axiosSecure
			.put(`${import.meta.env.VITE_API_URL}/users`, updatedData)
			.then((result) => {
				console.log(result);
				refetch()
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<Title heading={'All Users Are here'}></Title>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
				{users.map((user) => (
					<ManageUsersCard
						handleUpdateRole={handleUpdateRole}
						key={user._id}
						user={user}
					></ManageUsersCard>
				))}
			</div>
		</div>
	);
};

export default ManageUsers;
