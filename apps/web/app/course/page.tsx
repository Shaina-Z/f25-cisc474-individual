import "./page.css";
import Link from "next/link";

export default function Course(){
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
        </h2>
        </div>
       
    )
}