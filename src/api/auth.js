import Swal from 'sweetalert2';
import axios from 'axios';
export const saveUser = (user) => {
	const currentUser = {
		name: user.displayName,
		email: user.email,
		photo: user.photoURL,
		role: 'student',
	};
	// console.log(currentUser);

	fetch(`${import.meta.env.VITE_API_URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId) {
				Swal.fire({
					position: 'top-center',
					icon: 'success',
					title: 'User created successfully.',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		})
		.catch((error) => console.log(error));
};

export const saveGoogleUser = (user) => {
	const currentUser = {
		name: user.displayName,
		email: user.email,
		photo: user.photoURL,
		role: 'student',
	};
	// console.log(currentUser);
	fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.upsertedId) {
				Swal.fire({
					position: 'top-center',
					icon: 'success',
					title: 'User created successfully.',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		})
		.catch((error) => console.log(error));
};

export const handleUpdateRole = (email, role) => {
	const updatedData = { email: email, role: role };
	axios
		.put(`${import.meta.env.VITE_API_URL}/users`, updatedData)
		.then((result) => {})
		.catch((error) => console.log(error));
};
