import Link from "next/link"

export default function CourseView(){
    return(
        <div>
          <h1>Courses</h1>
                <hr></hr>
                <ol>
                <nav>
                    <Link href="/course">Course</Link>
                </nav>
                </ol>
                </div>
    )
}