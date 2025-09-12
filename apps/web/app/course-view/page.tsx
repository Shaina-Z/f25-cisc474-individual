import Link from "next/link"
import "./page.css";

export default function CourseView(){
    return(
        <div className="main">
            <Link className="profile-pic" href="/profile">.</Link>
          <h1 className="title">Courses</h1>
                <hr></hr>
                <ol>
                <nav>
                    <Link className="course"href="/course">Course</Link>
                </nav>
                <hr></hr>
                </ol>
                </div>
    )
}