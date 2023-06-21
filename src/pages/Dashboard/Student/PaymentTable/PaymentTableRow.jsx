import React from 'react';

const PaymentTableRow = ({ paidClass, index }) => {
    const { date, className, cost, transactionId } = paidClass;
    
		const date1 = new Date(date);
		const options = { dateStyle: 'long', timeStyle: 'medium' };
		const formattedDateTime = date1.toLocaleString(undefined, options);

		
	return (
		<>
			<tr className='text-base text-center'>
				<th> {index + 1}</th>
				<td>{className}</td>
				<td>${cost}</td>
				<td>
					{transactionId}
                    <br />
					<span className='text-gary-100 font-semibold'>{formattedDateTime}</span>
				</td>
			</tr>
		</>
	);
};

export default PaymentTableRow;