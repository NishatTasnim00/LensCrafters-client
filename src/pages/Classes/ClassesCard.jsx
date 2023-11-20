import { useNavigate } from 'react-router-dom';
// import { handleBookClass } from '../../api/bookClass';
import useGetUser from '../../hooks/useGetUser';
import { toast } from 'react-hot-toast';

const ClassesCard = ({ singleClass, handleBookClass }) => {
	const navigate = useNavigate();
	const { userData } = useGetUser();
	const { _id, image, name, instructorName, availableSeats, fees, enrolled } =
		singleClass;

	const handleNotUser = () => {
		toast.error('Login Please.');
		navigate('/login');
	};
	return (
		<div
			className={`card  h-[500px]  shadow-lg rounded-lg mt-10 ${
				availableSeats < 1 ? 'bg-red-500' : ''
			}`}
		>
			<figure className="h-[700px] w-full rounded-t-lg">
				<img
					src={image}
					alt="toys"
					className="rounded-t-lg h-[700px] w-full object-contain"
				/>
			</figure>
			<div className="flex flex-col text-left px-10 py-5  space-y-1">
				<h2 className="text-tag">
					<span className="font-light text-base">Course :</span> {name}
				</h2>
				<h2 className="text-tag">
					<span className="font-light text-base">Instructor : </span>
					{instructorName}
				</h2>
				<h2 className="text-tag">
					<span className="font-light text-base">Available Seats : </span>
					{availableSeats}
				</h2>

				<p className="text-price">
					<span>Cost : </span>${fees}
				</p>

				
			</div>
			<div className="w-full justify-end">
					<button
						disabled={userData.role !== 'student' || availableSeats <= 0}
						onClick={() => {
							userData ? handleBookClass(userData._id, _id) : handleNotUser();
						}}
						className={`btn btn-block rounded-b-lg rounded-none  border-none bg-gray-950 text-white`}
					>
						Enroll Now
					</button>
				</div>
		</div>
	);
};

export default ClassesCard;
