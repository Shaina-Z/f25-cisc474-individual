import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div className="main">
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>
                <Link to={"/course"}>Course</Link>
                </div>
}
