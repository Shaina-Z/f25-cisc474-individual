import Link from "next/link"
import "./page.css";

export default function CourseView(){
    return(
        <div>
          <h1 className="title">Courses</h1>
                <hr></hr>
                <ol>
                <nav>
                    <Link href="/course">Course</Link>
                </nav>
                </ol>
                </div>
    )
}