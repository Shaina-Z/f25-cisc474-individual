import "./page.css";
import Link from "next/link";
import Assignments from './assignment'
import { getAssignments } from './getAssignments'
import { Suspense } from 'react'
export default function Course(){
    const assignments = getAssignments()
    return(
        <div>
            <Link className="back-button" href="./course-view">Back</Link>
            <Link className="profile-pic" href="/profile">.</Link>
            <h1 className="title">TITLE OF COURSE
                <hr className="profile-border"></hr>
            </h1>
            <h2 className="assignments-container">Assignments
                <hr></hr>
            <nav>
        <Link className="assignment" href="/assignment">Assignment</Link>
        </nav>
         <Suspense fallback={<div>Loading...</div>}>
              <Assignments assignments={assignments} />
            </Suspense>
        </h2>
        </div>
       
    )
}