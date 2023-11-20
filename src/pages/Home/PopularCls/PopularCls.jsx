import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PopularClsCard from './PopularClsCard';
import Title from '../../../component/Title/Title';
import { DarkModeContext} from '../../../Provider/DarkMoodProvider'
import { AuthContext } from '../../../Provider/AuthProvider';

const PopularCls = () => {
	const{user, loading} = useContext(AuthContext)
	const { darkMode } = useContext(DarkModeContext);
	const [classes, setClasses] = useState([]);
	const axiosSecure = useAxiosSecure()
	useEffect(() => {
axiosSecure.get('/classes').then(data=>setClasses(data.data))
		
	}, [loading]);
	return (
		<div className='container mx-auto'>

			<Title className="mx-auto" heading="Popular Classes"></Title>
			<div
				className={`grid grid-cols-1 lg:grid-cols-3 gap-5`}
			>
				{classes.slice(0, 6).map((classItem) => (
					<PopularClsCard
						classItem={classItem}
						key={classItem._id}
					></PopularClsCard>
				))}
			</div>
		</div>
	);
};

export default PopularCls;
