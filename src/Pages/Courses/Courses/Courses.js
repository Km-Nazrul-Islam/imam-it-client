import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='row mt-5 px-4'>
            <div className='col-lg-3'>
                <LeftSideNav></LeftSideNav>
            </div>
           <div className='col-lg-9 m-0 row'>
                {
                    courses.map(course => <div className='border border-1 col-lg-4 m-0' key={course._id}>


                        <img className='img-fluid rounded-2' src={course.image_url} alt="" />
                        <h4 className='text-center'>{course.title}</h4>
                        <Link to={`/courses/${course._id}`}><Button variant="primary mt-2 mb-5">Course Details</Button></Link>
                    </div>)
                }
           </div>
        </div>
    );
};

export default Courses;

