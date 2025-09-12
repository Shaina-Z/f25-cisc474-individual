import Link from "next/link";
import "./page.css";

export default function Profile(){
    return(
        <div>
            <Link className="back-button" href="./course-view">Back</Link>
            <div className="profile-image"></div>
        </div>
    )
}