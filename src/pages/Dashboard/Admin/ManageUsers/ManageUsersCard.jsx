import React, { useContext } from 'react';
import { DarkModeContext } from '../../../../Provider/DarkMoodProvider';
// import { handleUpdateRole } from '../../../../api/auth';

const ManageUsersCard = ({ user, handleUpdateRole }) => {
	const { darkMode } = useContext(DarkModeContext);	const { _id, name, email, role, photo } = user;
	return (
		<div className={`card shadow-xl rounded-lg ${ darkMode? "bg-gray-400 text-gray-100" :" "}`}>
			<figure className="h-64">
				<img className="h-full w-full object-cover" src={photo} alt="user" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{name}
					<div
						className={`badge capitalize py-2 bg-opacity-40 ${
							role === 'admin'
								? 'bg-warning'
								: role === 'instructor'
								? 'bg-info'
								: 'bg-secondary'
						}`}
					>
						{role}
					</div>
				</h2>
				<p className="text-neutral -mt-2">{email}</p>
				<div className="card-actions justify-end text-info font-semibold mt-5">
					<button
						onClick={() => 
							handleUpdateRole(email, 'admin')
						}
						disabled={role === 'admin' ? true : false}
						className="badge bg-warning p-3 bg-opacity-40"
					>
						Make Admin
					</button>
					<button
						onClick={() => 
							handleUpdateRole(email, 'instructor')
						}
						disabled={role === 'instructor' ? true : false}
						className="badge p-3 bg-primary bg-opacity-20"
					>
						Make Instructor
					</button>
				</div>
			</div>
		</div>
	);
};

export default ManageUsersCard;
