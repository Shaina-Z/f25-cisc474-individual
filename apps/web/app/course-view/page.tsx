import Link from "next/link"
import "./page.css";
import Courses from './course-view'
import { getCourses } from './getCourses'
import { Suspense } from 'react'

export default function CourseView(){
     const courses = getCourses()
    return(
        <div className="main">
            <Link className="profile-pic" href="/profile">.</Link>
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>
                <nav>
                    <Link className="course"href="/course">course</Link>
                </nav>
                 <Suspense fallback={<div>Loading...</div>}>
      <Courses courses={courses} />
    </Suspense>
                </div>
    )
}