import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf"

const ref = React.createRef();

const CoursesDetails = () => {
    const course = useLoaderData();
    return (
        <div ref={ref} className='mt-5'>
            <img className='img-fluid rounded-3' src={course.image_url} alt="" />
            <h2 className='mt-2'>{course.title}</h2>
            <p>{course.details}</p>
            <Link to='/checkout'><Button variant="primary">Get Premium Access</Button></Link>
            <ReactToPdf targetRef={ref} filename="course-invoice.pdf" x={40} y={50} scale={0.8}>
                {({ toPdf }) => (
                    <Button onClick={toPdf}>Download</Button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default CoursesDetails;