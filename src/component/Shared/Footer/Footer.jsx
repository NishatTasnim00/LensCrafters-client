import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/camera.png';
import { FaArrowRight, FaFacebook } from 'react-icons/fa';
import facebook from '../../../assets/icons/facebook (1).png';
import instagram from '../../../assets/icons/instagram.png';
import youtube from '../../../assets/icons/youtube.png';
import { motion } from 'framer-motion';

const Footer = () => {
	return (
		<footer>
			<div className="bg-accent md:h-96 grid content-center">
				<section className="w-full max-w-6xl mx-auto text-white space-y-14 md:grid grid-cols-4 gap-7 justify-center p-5">
					<div className="text-center md:text-start pt-10">
						<div className="flex">
							<motion.div
								animate={{
									scale: [1, 2, 2, 1, 1],
									rotate: [0, 0, 270, 270, 0],
									borderRadius: ['20%', '20%', '50%', '50%', '20%'],
								}}
							>
								<img className=" pr-4" src={logo} alt="" />
							</motion.div>
							<div>
								<p className="font-poppins">
									Photography workshops, hands-on experience, creativity
									unleashed.
								</p>
							</div>
						</div>
					</div>
					<div className="text-center md:text-start">
						<h3 className="text-white font-extrabold text-2xl pb-5">
							Usefull Link
						</h3>
						<ul className="list-none font-poppins space-y-2">
							<li>
								<NavLink to="/" aria-label="Home" title="Home">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/instructors" title="About">
									Instructors
								</NavLink>
							</li>
							<li>
								<NavLink to="/Classes">Classes</NavLink>
							</li>
						</ul>
					</div>
					<div className="space-y-2 text-center md:text-start">
						<h3 className="text-ehitefont-ebgara font-extrabold text-2xl pb-5">
							Contact Now
						</h3>
						<p className="font-poppins">
							55, Banani
							<br />
							Dhaka, Bangladesh
						</p>
						<p className="font-poppins">+88 01750 000 000</p>
						<p className="font-poppins">info@gmail.com</p>
					</div>
					<div className="space-y-2 text-center md:text-start">
						<h3 className="text-ehitefont-ebgara font-extrabold text-2xl pb-5">
							Subscribe
						</h3>
						<p className="font-poppins">Subscribe for our latest materials.</p>

						<div className="flex relative">
							<input
								type="text"
								id="website-admin"
								className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-44 max-w-600 text-sm p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-ehitedark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Email Address"
							></input>
							<span className="absolute right-0 top-0 bottom-0 inline-flex items-center px-8 text-sm text-gray-900 bg-dark-amber border border-r-0 border-gray-300  rounded-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 p-1">
								<FaArrowRight color="gray" />
							</span>
						</div>
						<div className="flex gap-8 h-8 mt-3 ml-12">
							<img src={facebook} alt="" />
							<img src={instagram} alt="" />
							<img src={youtube} alt="" />
						</div>
					</div>
				</section>
				<hr className="py-2 text-slate-500 w-10/12 mx-auto" />
				<p className="text-center text-gray-500 font-extralight">
					&copy; {new Date().getFullYear()} Lens Crafter. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
