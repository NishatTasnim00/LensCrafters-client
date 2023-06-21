import { loadStripe } from '@stripe/stripe-js';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const PaymentModal = ({ className, classId, classImage, fees }) => {
	const courseCost = fees;
	return (
		<>
			<label htmlFor="my_modal" className="btn btn-primary w-3/12">
				Pay Now
			</label>
			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my_modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box rounded-sm">
					<label
						htmlFor="my_modal"
						className="btn btn-sm btn-circle bg-accent hover:bg-red-800 btn-ghost absolute right-2 top-2 text-white"
					>
						✕
					</label>

					<h3 className="font-bold text-lg text-accent">Make Payment Now...</h3>
					<div>
						<Elements stripe={stripePromise}>
							<CheckOutFrom
								className={className}
								classId={classId}
								classImage={classImage}
								courseCost={fees}
							></CheckOutFrom>
						</Elements>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentModal;
