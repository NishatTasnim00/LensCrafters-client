import { useState } from "react";

const useFee = () => {
	const [fee, setFee] = useState(null);

	const setFeeValue = (value) => {
		setFee(value);
		console.log(fee);
	};

	return { fee, setFee };
};

export default useFee;
