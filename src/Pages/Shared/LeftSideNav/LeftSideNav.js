import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {
    const [courseDetails, setCoursesDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
            .then(data => setCoursesDetails(data))
    }, [])

    return (
        <div className=' ms-4 text-white text-center sticky-top'>
            <h2 className=''>All courses: {courseDetails.length}</h2>
            <div className=''>
                {
                    courseDetails.map(course => <p key={course._id}>
                        
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary" size="lg">
                                <Link className='text-decoration-none text-black sticky-top' to={`/courses/${course._id}`}>{course.title}</Link>
                            </Button>
                        </div>
                        
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;