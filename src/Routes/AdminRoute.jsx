import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import img from '../loading.json';
import { AuthContext } from '../Provider/AuthProvider';
import useGetUser from '../hooks/useGetUser';

const AdminRoute = ({ children }) => {
	const { role, userData } = useGetUser();
	console.log(userData);
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
		);
	}
	if (user && role === 'admin') {
		return children;
	} else {
		return 
		// <Navigate to='/'></Navigate>
	}
};

export default AdminRoute;
