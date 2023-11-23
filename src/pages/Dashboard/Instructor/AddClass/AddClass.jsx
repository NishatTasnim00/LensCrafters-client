import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider';
import axios from 'axios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Title from '../../../../component/Title/Title';
import useGetUser from '../../../../hooks/useGetUser';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
	const {userData} = useGetUser()
	const [value, setValue] = useState('Upload Image:');
	const { user } = useContext(AuthContext);
	const axiosSecure = useAxiosSecure();
	const navigate = useNavigate();
	// console.log(user);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (newData) => {
		// console.log(newClass);

		// Image Upload
		const image = newData.image[0];
		const formData = new FormData();
		formData.append('image', image);
		// console.log(newClass.image[0].name);
		const url = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_IMGBB_KEY
		}`;

		axios
			.post(url, formData)
			.then((imageData) => {
				console.log(imageData);
				if (imageData.data.success) {
					const imageUrl = imageData.data.data.url;
					const { name, instructorName, instructorImage , capacity, email, booked, availableSeats, fees, status} = newData;
					const newClass = {
						name,
						image: imageUrl,
						instructorName,
						instructorImage,
						email,
						capacity: parseInt(capacity),
						booked: parseInt(booked),
						availableSeats: parseInt(capacity),
						fees: parseFloat(fees),
						status,
					}; 
					console.log(imageUrl);
					console.log(newClass);
					axiosSecure.post(`${import.meta.env.VITE_API_URL}/classes`, newClass)
					.then((result) => {
								console.log(newClass);
								if (result.data.insertedId) {
									Swal.fire({
										title: 'Welcome!',
										text: 'Item added successfully!',
										icon: 'success',
										buttons: false,
										className: 'text-red-800',
										closeModal: false,
										timer:1500,
									});
									navigate('/dashboard/myClasses')
								}
							});
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	
	};


	return (
		<div className="lg:w-[1000px]">
			<Title heading={'Launch a new course'}></Title>
			<form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto">
				{errors.exampleRequired && <span>This field is required</span>}
				<div className="grid lg:grid-cols-2">
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Course Name</span>
						</label>
						<input
							className="input add-class capitalize"
							{...register('name')}
							placeholder="Course Name"
							required
						/>
					</div>

					<div className="w-full px-5 relative">
						<label className="label">
							<span className="text-add-class">Image</span>
						</label>
						<div className="input add-class relative ">
							<input
								className="opacity-100 top-2 absolute"
								{...register('image')}
								type="file"
								accept="image/*"
								placeholder="Image"
								required
							/>
							<p className="pt-2 z-10 top-1 absolute bg-slate-100 p-[6px] left-0">
								{value}
							</p>
						</div>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Instructor Name</span>
						</label>
						<input
							className="input add-class"
							{...register('instructorName')}
							// placeholder="Instructor Name"
							value={user.displayName}
							required
						/>
					</div>

					<div className="w-full px-5" hidden>
						<label className="label">
							<span className="text-add-class">Instructor Image</span>
						</label>
						<input
							className="input add-class"
							{...register('instructorImage')}
							// placeholder="Instructor Image URL"
							value={
								userData.photo ||
								'https://i.ibb.co/1Jg9qPp/meritt-thomas-ao-Q4-DYZLE-E-unsplash.jpg'
							}
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Email</span>
						</label>
						<input
							className="input add-class"
							{...register('email')}
							placeholder="Email"
							value={user.email}
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Capacity</span>
						</label>
						<input
							className="input add-class"
							{...register('capacity')}
							placeholder="Capacity"
							type="number"
							min={0}
							required
						/>
					</div>
					<div className="w-full px-5" hidden>
						<label className="label">
							<span className="text-add-class">Enrolled Student</span>
						</label>
						<input
							className="input add-class"
							{...register('booked')}
							placeholder="Enrolled Student"
							type="number"
							value="0"
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Fees</span>
						</label>
						<input
							className="input add-class"
							{...register('fees')}
							placeholder="$"
							type="number"
							min={0}
							required
						/>
					</div>
				</div>

				<div className="w-full px-5" hidden>
					<label className="label">
						<span className="text-add-class">Status</span>
					</label>
					<input
						className="input add-class"
						{...register('status')}
						placeholder="Status"
						value="pending"
						required
					/>
				</div>

				<div className="w-full p-5 ">
					<button type="submit" className="btn btn-block btn-primary">
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddClass;
