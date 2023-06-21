import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import axios from 'axios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import PaymentTableRow from './PaymentTableRow';

const PaymentTable = () => {
	const axiosSecure = useAxiosSecure();
	const { user, loading } = useContext(AuthContext);
	const [paidClasses, setPaidClasses] = useState([]);
	console.log(paidClasses);
	useEffect(() => {
		user &&
			axiosSecure.get(`/payments/${user?.email}`).then((result) => {
				const result1 = result.data;
				const paidClasses = result1.reverse();
				setPaidClasses(paidClasses);
			});
	}, [user, loading]);

	return (
		<div className="container">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className='text-lg font-semibold bg-gray-400 text-gray-950 text-center'>
						<tr>
							<th>*</th>
							<th className='w-3/12'>Course</th>
							<th className=''>Course Fee</th>
							<th>Transaction Details</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{paidClasses.map((paidClass, index) => (
							<PaymentTableRow
								key={paidClass._id}
								paidClass={paidClass}
								index={index}
							></PaymentTableRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentTable;
