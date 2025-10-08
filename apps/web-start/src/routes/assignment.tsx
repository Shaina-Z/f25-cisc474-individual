import { createFileRoute } from '@tanstack/react-router'
import "./assignment.css"

export const Route = createFileRoute('/assignment')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div>
            <h1 className="title">NAME OF ASSIGNMENT
            <hr className="profile-border"></hr>
            </h1>
            <h2 className="description"> there will be a description here!</h2>
        </div>
}
