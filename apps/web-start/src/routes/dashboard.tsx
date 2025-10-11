import { Link, createFileRoute } from '@tanstack/react-router'
import "./dashboard.css"
import GetCourses from '../getCourses'
import GetAssignments from '../getAssignments'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div className="main">
    <a className="profile-pic"></a>
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>.
                <Link to={"/course"}>Course</Link>
                <GetCourses/>
                <GetAssignments></GetAssignments>
                </div>
}
