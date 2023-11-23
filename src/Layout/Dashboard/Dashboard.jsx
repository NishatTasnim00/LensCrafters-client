import { NavLink, Outlet } from 'react-router-dom';
import DashboardItem from '../../component/DashboardItem/DashboardItem';
import camera from '../../../public/camera.png';
import useGetUser from '../../hooks/useGetUser';
import { motion } from 'framer-motion';
import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { DarkModeContext } from '../../Provider/DarkMoodProvider';

const Dashboard = () => {
	const { userData } = useGetUser();
	const {user} = useContext(AuthContext)
	const {darkMode} = useContext(DarkModeContext)
	return (
		<div className={`font-primary ${darkMode ? 'text-white bg-gray-600' : ''}`}>
		<div className="drawer lg:drawer-open logo">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
				<div className={`font-primary ${darkMode ? 'text-white bg-gray-600' : ''}`}>
				<Outlet></Outlet>
				</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>

				<ul className="menu p-4 w-80 h-full bg-accent text-base-gray-800 pt-12 ">
					<div className="flex gap-1 mb-5 justify-center pb-15">
						<motion.div
							animate={{
								scale: [1, 2, 2, 1, 1],
								rotate: [0, 0, 270, 270, 0],
								borderRadius: ['20%', '20%', '50%', '50%', '20%'],
							}}
						>
							<img className="w-10 -mt-2" src={camera} alt="" />
						</motion.div>

						<a className="normal-case text-2xl logo text-yellow-600">LensCrafters</a>
					</div>
					<img
						className="h-24 w-24 rounded-full border-2 border-gray-500 mx-auto"
						src={user.photoURL}
						alt=""
					/>
					{/* Sidebar content here */}
					<DashboardItem></DashboardItem>
					<div className="divider text-zinc-300"></div>
					<li className="text-li">
						<NavLink to="/">
							<FaHome />
							Home
						</NavLink>
					</li>
					<li className="text-li">
						<NavLink to="/instructors">
							<FaChalkboardTeacher />
							Instructor
						</NavLink>
					</li>
					<li className="text-li">
						<NavLink to="/classes">
							<MdClass />
							Classes
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
		</div>
	);
};

export default Dashboard;
