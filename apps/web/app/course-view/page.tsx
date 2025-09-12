import Link from "next/link"
import "./page.css";

export default function CourseView(){
    return(
        <div className="main">
            <Link className="profile-pic" href="/profile">.</Link>
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>
                <nav>
                    <Link className="course"href="/course">Course</Link>
                </nav>
                </div>
    )
}