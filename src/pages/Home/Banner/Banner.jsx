import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
	return (
		<div>
			<Carousel className="text-center h-[700px]" showThumbs={false}>
				<div className="relative flex justify-center">
					<img
						className="h-[700px] object-cover"
						src="https://i.ibb.co/RQCbwBF/dave-lsoog-GC-5dg-unsplash.jpg"
						alt="Image 1"
						height="500px"
					/>
					<div className="absolute top-48 text-gray-500 opacity-70">
						<h1 className="banner-title">Capturing the Beauty of Nature</h1>

						<p className="banner-subtitle">
							{' '}
							Inspiring Landscapes through Photography
						</p>
					</div>
				</div>
				<div className="flex justify-center bg-black ">
					<img
						className="h-[700px] opacity-70"
						src="https://i.ibb.co/8xKxj4Y/neom-yx7-TJle8-Lh-M-unsplash.jpg"
						alt="Image 2"
					/>
					<div className="absolute top-40 text-blue-500">
						<h1 className="banner-title">Diving into the Depths</h1>

						<p className="banner-subtitle">
							Unveiling the Wonders of Underwater Photography
						</p>
					</div>
				</div>
				<div className="bg-black flex justify-center">
					<img
						className="h-[700px] opacity-70"
						src="https://images.unsplash.com/photo-1495837139561-4a6359962783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
						alt="Image 3"
					/>
					<div className="absolute top-40 text-gray-100">
						<h1 className="banner-title">Streets Unveiled</h1>

						<p className="banner-subtitle">
							Capturing the Essence of Urban Life Through Street Photography
						</p>
					</div>
				</div>
				<div className="bg-black flex justify-center">
					<img
						className="h-[700px] opacity-70"
						src="https://i.ibb.co/0QpCYmJ/aaron-burden-Rg-TI2-Ka-Q5-N4-unsplash.jpg"
						alt="Image 4"
					/>
					<div className="absolute top-40 text-gray-100">
						<h1 className="banner-title">Unveiling the Tiny World</h1>

						<p className="banner-subtitle">
							Discovering Wonders through Miniature Photography
						</p>
					</div>
				</div>
				<div className="bg-black flex justify-center">
					<img
						className="h-[700px] opacity-70"
						src="https://i.ibb.co/BrYw1V7/mostafa-meraji-r-QZn-IC91rf-U-unsplash.jpg"
						alt="Image 5"
					/>
					<div className="absolute top-40 text-blue-400">
						<h1 className="banner-title">
							Unveiling the Splendor of Structures
						</h1>

						<p className="banner-subtitle">
							Architectural Photography that Inspires
						</p>
					</div>
				</div>
				<div className="bg-black flex justify-center">
					<img
						className="h-[700px] opacity-70"
						src="https://i.ibb.co/8mbGYFd/zdenek-machacek-Ux-Hol6-Sw-Ly-M-unsplash.jpg"
						alt="Image 6"
					/>
					<div className="absolute top-40 text-gray-300 opacity-90">
						<h1 className="banner-title">Enchanting Wildlife Photography</h1>

						<p className="banner-subtitle">Which Ignites Conservation</p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
