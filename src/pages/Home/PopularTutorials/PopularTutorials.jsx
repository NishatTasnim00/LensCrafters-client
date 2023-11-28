import React, { useContext, useEffect, useState } from 'react'
import Title from '../../../component/Title/Title'
import { AuthContext } from '../../../Provider/AuthProvider';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';
import axios from 'axios';
import PopularTutorialsCard from './PopularTutorialsCard';

const PopularTutorials = () => {

    const { user, loading } = useContext(AuthContext);
    const { darkMode } = useContext(DarkModeContext);
    const [tutorials, setTutorials] = useState([]);
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/tutorials`).then((data) => setTutorials(data.data));
    }, [loading, axios]);
    // console.log(tutorials);
  return (
    <div className='container'>
        <Title heading={"Popular Tutorials"}></Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-10">
                {
                    tutorials && tutorials?.slice(0,3).map(tutorial => <PopularTutorialsCard key={tutorial.id} tutorial={tutorial}></PopularTutorialsCard>)
                }
            </div>
    </div>
  )
}

export default PopularTutorials