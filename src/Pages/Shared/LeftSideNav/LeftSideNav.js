import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {
    const [courseDetails, setCoursesDetails] = useState([]);

    useEffect(() => {
        fetch('https://imam-it-foundation-server-site.vercel.app/item')
        .then(res => res.json())
            .then(data => setCoursesDetails(data))
    }, [])

    return (
        <div className='text-white text-center sticky-top'>
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