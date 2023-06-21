import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { saveGoogleUser } from '../../../api/auth';

const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { googleSignIn } = useContext(AuthContext);
	let from = location.state?.from?.pathname || '/';
	const handleGoogleSignIn = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			saveGoogleUser(loggedInUser);
			
		});
		navigate(from, { replace: true });
	};
	return (
		<div>
			<div className="divider"></div>
			<div
				className="w-full flex justify-center
                "
			>
				<button
					onClick={handleGoogleSignIn}
					className="btn btn-circle btn-outline"
				>
					<FaGoogle />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
