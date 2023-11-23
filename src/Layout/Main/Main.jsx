import React, { useContext, useState } from 'react';
import Navbar from '../../component/Shared/Navbar/Navbar';
import Footer from '../../component/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Lottie from 'lottie-react';
import img from '../../loading.json'
import { AuthContext } from '../../Provider/AuthProvider';
import { DarkModeContext } from '../../Provider/DarkMoodProvider';

const Main = () => {
	const { loading } = useState(AuthContext);
	const { darkMode } = useContext(DarkModeContext);

	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
		);
	}
	return (
		<div className={`font-primary ${darkMode ? 'text-white bg-gray-600' : ''}`}>
			<Navbar />
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
