import { Link, createFileRoute } from '@tanstack/react-router'
import "./dashboard.css"
import GetCourses from '../getCourses'


export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div className="main">
    <a className="profile-pic"></a>
    <div className='links'>
    <Link to={"/add"}>Add/Delete Courses</Link>
    <Link to={"/edit"}>Edit Courses</Link>
    </div>
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>.
                <Link to={"/course"}>Course</Link>
                <GetCourses/>
                </div>
}
