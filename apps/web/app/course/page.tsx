import "./page.css";
import Link from "next/link";

export default function Course(){
    return(
        <div>
            <h1 className="title">TITLE OF COURSE
                <hr className="profile-border"></hr>
            </h1>
            <nav>
        <Link className="assignment" href="/assignment">Assignment</Link>
        </nav>
        </div>
       
    )
}