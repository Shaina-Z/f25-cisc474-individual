import { Link, createFileRoute } from '@tanstack/react-router'
import "./course.css"

export const Route = createFileRoute('/course')({
  component: RouteComponent,
})

function RouteComponent() {
  return     <div>
            <h1 className="title">TITLE OF COURSE
                <hr className="profile-border"></hr>
            </h1>
            <h2 className="assignments-container">Assignments
                <hr></hr>
                <Link to={"/assignment"}>Assignment</Link>
           
        </h2>
        </div>
}
