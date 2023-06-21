import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import './CheckOut.css';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import useGetUser from '../../../hooks/useGetUser';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckOutForm = ({ className, classId, classImage, courseCost }) => {
	const stripe = useStripe();
	const elements = useElements();
	const { user, loading } = useContext(AuthContext);
	const { userData } = useGetUser();
	const axiosSecure = useAxiosSecure();
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		if (courseCost > 0) {
			axiosSecure.post('/create-payment-intent', { courseCost }).then((res) => {
				// console.log(res.data.clientSecret);
				setClientSecret(res?.data?.clientSecret);
			});
		}
	}, [courseCost, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log('error', error);
			setCardError(error.message);
		} else {
			setCardError('');
			console.log('payment method', paymentMethod);
		}

		setProcessing(true);
		// confirm payment
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: userData?.email || 'unknown',
						name: user?.displayName || 'anonymous',
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
			setCardError(confirmError.message);

		}

		console.log('payment intent', paymentIntent);
		setProcessing(false);
		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);
			// save payment information to the server
			const payment = {
				email: userData?.email,
				className: className,
				classId: classId,
				classImage: classImage,
				cost: courseCost,
				transactionId: paymentIntent.id,
				status: 'paid',
			};
			// console.log(payment);

			axiosSecure.post('/payments', payment).then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					navigate("/dashboard/enrolledClasses")
					// display confirm
					// toast.success('Information successfully saved!');
				}
			});
// deleted from selected class
			const updateDoc = {
				userId: userData._id,
				classId: classId,
			};
			console.log(updateDoc);

			axiosSecure.post(`/deleteClass`, updateDoc).then((result) => {
				toast.success(`Successfully Enrolled in ${className}`);
			});
// added on enrolled class
			axiosSecure
				.post(`/updateClassData/${classId}`)
				.then((result) => {
					console.log(result);
				})
				.catch((err) => console.log(err));
		}
		axiosSecure.post(`'/updateClassData/${classId}`).then(res=>console.log(res))
	};


	return (
		<>
			<form className="w-2/3 m-8" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className="btn btn-primary btn-sm mt-4"
					type="submit"
					disabled={
						!stripe ||
						 !clientSecret ||
						processing
					}
				>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-600 ml-8">{cardError}</p>}
			{transactionId && (
				<p className="text-green-500 pb-2">
					Transaction complete !{/* with transactionId: {transactionId} */}
				</p>
			)}
		</>
	);
};

export default CheckOutForm;
