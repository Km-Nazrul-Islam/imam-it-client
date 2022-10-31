import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const course = useLoaderData();
    return (
        <div className='mt-5'>
            <img className='img-fluid rounded-3' src={course.image_url} alt="" />
            <h2 className='mt-2'>{course.title}</h2>
            <p>{course.details}</p>
            <Link to='/checkout'><Button variant="primary">Get Premium Access</Button></Link>
        </div>
    );
};

export default CoursesDetails;