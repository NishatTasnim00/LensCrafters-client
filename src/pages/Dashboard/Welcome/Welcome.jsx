import React from 'react';
import useGetUser from '../../../hooks/useGetUser';
import  Lottie  from 'lottie-react';
import click from '../../../click.json'
import Title from '../../../component/Title/Title';
const Welcome = () => {
    const {userData} = useGetUser()
    return (
			<div className='container'>
				<Title heading={`Hello ! ${userData.name}`} subheading={'Welcome to LensCrafter'}></Title>

				<div>
					<Lottie className='h-64' animationData={click} loop={true} ></Lottie>
				</div>
			</div>
		);
};

export default Welcome;