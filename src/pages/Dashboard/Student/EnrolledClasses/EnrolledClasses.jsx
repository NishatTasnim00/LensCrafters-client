import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useGetUser from '../../../../hooks/useGetUser';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider';
import EnrolledClassCard from './EnrolledClassCard';
import Title from '../../../../component/Title/Title';

const EnrolledClasses = () => {
    const axiosSecure = useAxiosSecure()
    const {userData} = useGetUser()
    const {user, loading} = useContext(AuthContext)
        const { data: enrolledClasses = [], refetch,  } = useQuery({
					queryKey: ['enrolledClasses', userData?.email],
					enabled: !loading,
					queryFn: async () => {
						const result = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
						return result.data;
					},
				});
                // console.log(enrolledClasses);

    return (
			<div className="container">
				<Title
					heading={`Your Courses`}
					subheading={`You are enrolled in ${enrolledClasses.length} courses`}
				></Title>
				<p></p>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{enrolledClasses.map((enrolledClass) => (
						<EnrolledClassCard
							key={enrolledClass._id}
							enrolledClass={enrolledClass}
						></EnrolledClassCard>
					))}
				</div>
			</div>
		);
};

export default EnrolledClasses;