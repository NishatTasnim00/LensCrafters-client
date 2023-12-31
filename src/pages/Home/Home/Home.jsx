import React, { useContext, useState } from 'react';
import PopularCls from '../PopularCls/PopularCls';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Banner from '../Banner/Banner';
import OurWork from '../../OurWork/OurWork';
import Contact from '../Contact/Contact';
import FAQSection from '../FAQSection/FAQSection';
import Gallery from '../Gallery/Gallery';
import PopularTutorials from '../PopularTutorials/PopularTutorials';

const Home = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={` ${darkMode ? 'text-white bg-gray-600' : 'light'}`}>
			<Banner></Banner>
			<PopularCls></PopularCls>
			<PopularInstructor></PopularInstructor>
			<PopularTutorials />
			<OurWork></OurWork>
			<Gallery />
			<FAQSection />

			<Contact />
		</div>
	);
};

export default Home;
