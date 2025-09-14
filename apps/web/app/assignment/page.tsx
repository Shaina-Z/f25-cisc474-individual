import Link from "next/link";
import "./page.css";

export default function Assignment(){
    return(
        <div>
            <Link className="profile-pic" href="/profile">.</Link>
            <h1 className="title">NAME OF ASSIGNMENT
            <hr className="profile-border"></hr>
            </h1>
            
            <h2 className="description"> there will be a description here!</h2>
        </div>
        
    )
}