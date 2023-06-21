import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../Provider/AuthProvider';
import MyClassRow from './MyClassRow';
import Title from '../../../../component/Title/Title';
import useGetUser from '../../../../hooks/useGetUser';

const MyClasses = () => {
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);
	const { userData } = useGetUser();
	const [myClasses, setMyClasses] = useState([]);
	useEffect(() => {
		axiosSecure
			.get(`classes/${user.email}`)
			.then((data) => setMyClasses(data.data));
	}, [axiosSecure]);
	return (
		<div className="w-10/12">
			<Title
				heading={`Courses Conducted `}
				subheading={`by ${userData?.name}`}
			></Title>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="text-lg font-semibold bg-gray-400 text-gray-950 text-center">
						<tr>
							<th>
								<label>#</label>
							</th>
							<th className="w-80">Course Info.</th>
							<th className="">
								Total Enrolled <br /> Students
							</th>
							<th className="">
								Status &
								<br />
								Feedback
							</th>
							<th className="">Edit</th>
						</tr>
					</thead>
					<tbody className="">
						{myClasses.map((myClass, i) => (
							<MyClassRow
								key={myClass._id}
								myClass={myClass}
								i={i}
							></MyClassRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClasses;
