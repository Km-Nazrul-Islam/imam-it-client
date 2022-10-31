import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData()
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Your Premium Packeges is Activieted</h2>
            <div className='d-flex'>
                
                <div>
                    <h2>Course Info:</h2>
                    <h3>Course Name: {course.title}</h3>
                    <img className='img-fluid w-50' src={course.image_url} alt="" />
                </div>
                <div>
                    <h2>User Info</h2>
                    <h5>User Name: {user?.displayName}</h5>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>

    );
};

export default CheckOut;