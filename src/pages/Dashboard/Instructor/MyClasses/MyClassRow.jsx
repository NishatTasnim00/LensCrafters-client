import { BiEdit } from 'react-icons/bi';
const MyClassRow = ({ myClass, i }) => {
	// console.log(myClass);
	const { _id, image, name, fees, booked, status, feedback } = myClass;
	return (
		<tr className="text-center  w-full">
			<td>{i + 1}</td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-20 h-20">
							<img src={image} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div className="text-left">
						<div className="font-bold capitalize">{name}</div>
						<div className="text-sm">
							Course cost: <span className="font-bold text-lg">${fees}</span>
						</div>
					</div>
				</div>
			</td>
			<td>
				<span className="font-bold text-xl">{booked || 0}</span> Persons
			</td>
			<td className="text-xl font-normal uppercase">
				{status !== 'pending' ? (
					<>
						<details className="collapse collapse-arrow">
							<summary
								className={`collapse-title text-xl font-semibold uppercase ${
									status === 'denied' ? 'text - error' : 'text-success'
								}`}
							>
								{status}
							</summary>
							<div className="collapse-content">
								<p className="font-normal text-base capitalize">{feedback}</p>
							</div>
						</details>
					</>
				) : (
					<>{status}</>
				)}
			</td>
			<th>
				<button className="text-secondary">
					<BiEdit size={30} />
				</button>
			</th>
		</tr>
	);
};

export default MyClassRow;
