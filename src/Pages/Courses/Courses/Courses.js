import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='row mt-5'>
            {/* <h2>This is Coures: {courses.length}</h2> */}
            {
                courses.map(course => <div className='col-lg-4 border border-1' key={course._id}>

                    
                    <img className='img-fluid rounded-2' src={course.image_url} alt="" />
                    <h4 className='text-center'>{course.title}</h4>
                    <Link to={`/courses/${course._id}`}><Button variant="primary mt-2 mb-5">Course Details</Button></Link>
                </div>)
            }
        </div>
    );
};

export default Courses;

