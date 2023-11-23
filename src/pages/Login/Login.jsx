import React, { useContext } from 'react';
import bg1 from '../../assets/bg/floral.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../component/Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { signIn } = useContext(AuthContext);
	let from = location.state?.from?.pathname || '/';
	const { register, handleSubmit } = useForm();

	const handleLogin = (data) => {
		const { email, password } = data;
		// console.log(email, password);
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				// console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const text = error.code.split("/");
				const text1 = text[1].split("-").join(" ");
				const err = text1.charAt(0).toUpperCase() + text1.slice(1) + ".";
				toast.error(err);
			  });
	};

	return (
		<div
			className="hero py-5 lg:p-20  bg-accent bg-opacity-20"
			// style={{
			// 	backgroundImage: `url(https://petapixel.com/assets/uploads/2022/03/By-the-Numbers-The-Underrepresentation-of-Women-in-Photography-800x420.jpg`,
			// }}
		>
			<div
				className="hero-content bg-accent bg-opacity-40 mt-20 px-20 flex-col-reverse md:flex-row border-2 shadow-[5px_5px_2px_2px_rgba(0,0,0,0.3)]"
				// style={{ backgroundImage: `url(${bg1})` }}
			>
				<div className="card flex-shrink-0 w-full max-w-sm">
					<div className="card-body">
						<h1 className="text-5xl font-bold text-center">Login</h1>

						<form onSubmit={handleSubmit(handleLogin)}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									{...register('email')}
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									{...register('password')}
								/>
							</div>

							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
							<div className="form-control mt-6">
								<button className="btn btn-primary" type="submit">
									Login
								</button>
							</div>
							<p className="text-gray-100 pt-1">
								
									New here?
									<Link to="/signUp"> <span className='text-sky-300'>Create a new Account.</span></Link>
								
							</p>
							<SocialLogin></SocialLogin>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

// backgroundImage: `url(${bg1})`