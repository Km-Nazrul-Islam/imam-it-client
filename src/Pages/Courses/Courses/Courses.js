import React from "react"
import Button from "react-bootstrap/Button"
import { Link, useLoaderData } from "react-router-dom"
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav"

const Courses = () => {
  const courses = useLoaderData()
  return (
    <div className="row mt-5 px-4">
      <div className="col-lg-3">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-lg-9 m-0 row">
        {courses.map(course => (
          <div className="border border-1 col-lg-4" key={course._id}>
            <h4 className="text-center">{course.title}</h4>
            <img
              className="img-fluid rounded-2"
              src={course.image_url}
              alt=""
            />
            <Link to={`/courses/${course._id}`}>
              <Button variant="primary mt-2 mb-5">Course Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
