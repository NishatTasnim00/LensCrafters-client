import React, { useState } from 'react';
import Navbar from '../../component/Shared/Navbar/Navbar';
import Footer from '../../component/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Lottie from 'lottie-react';
import img from '../../loading.json'
import { AuthContext } from '../../Provider/AuthProvider';

const Main = () => {
	const { loading } = useState(AuthContext);
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
		);
	}
	return (
		<>
			<Navbar />
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
};

export default Main;
