import React, { useContext, useState } from 'react';
import PopularCls from '../PopularCls/PopularCls';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Banner from '../Banner/Banner';
import OurWork from '../../OurWork/OurWork';

const Home = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={` ${darkMode ? 'text-white bg-gray-600' : 'light'}`}>
			<Banner></Banner>
			<PopularCls></PopularCls>
			<PopularInstructor></PopularInstructor>
			<OurWork></OurWork>
		</div>
	);
};

export default Home;