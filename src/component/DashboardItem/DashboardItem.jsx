import { NavLink } from 'react-router-dom';
import { MdPendingActions, MdPayments } from 'react-icons/md';
// import { FaPeopleGroup } from 'react-icons/fa';
import {
	BsFillBookmarkFill, BsFillPeopleFill,
	BsFillBookmarkCheckFill,
	BsPersonFillGear,
	BsPersonLinesFill,
	BsFillPersonFill,
} from 'react-icons/bs';
import { AiFillFileAdd } from 'react-icons/ai';

import { FaAddressBook } from 'react-icons/fa';


import useGetUser from '../../hooks/useGetUser';

const DashboardItem = ({}) => {
	const { userData } = useGetUser();
	let role = userData.role;
	console.log(userData.role);
	const adminOption = (
		<>
			<li className="text-li text-center pb-5 flex mx-auto">
				<nav>
					<BsPersonFillGear className="text-amber-600" size={28} />
					Admin
				</nav>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/manageClasses">
					<BsFillBookmarkFill />
					Manage Classes
				</NavLink>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/manageUsers">
					<BsFillPeopleFill />
					Manage Users
				</NavLink>
			</li>
		</>
	);

	const instructorOption = (
		<>
			<li className="text-li text-center pb-5 mx-auto ">
				<nav>
					<BsPersonLinesFill className='text-secondary' size={28} />
					Instructor
				</nav>
			</li>

			<li className="text-li">
				<NavLink to="/dashboard/addClass">
					<AiFillFileAdd />
					Add A Class
				</NavLink>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/myClasses">
					<FaAddressBook />
					My Classes
				</NavLink>
			</li>
		</>
	);

	const studentOption = (
		<>
			<li className="text-li flex mx-auto pb-5">
				<nav>
					<BsFillPersonFill className="text-secondary" size={28} />
					Student
				</nav>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/selectedClasses">
					<MdPendingActions />
					Selected Classes
				</NavLink>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/enrolledClasses">
					<BsFillBookmarkCheckFill />
					Enrolled Classes
				</NavLink>
			</li>
			<li className="text-li">
				<NavLink to="/dashboard/payment">
					<MdPayments />
					Payment
				</NavLink>
			</li>
		</>
	);

	return (
		<>
			{role === 'admin' ? (
				adminOption
			) : role === 'instructor' ? (
				instructorOption
			) : role === 'student' ? (
				studentOption
			) : (
				<></>
			)}
		</>
	);
};

export default DashboardItem;
