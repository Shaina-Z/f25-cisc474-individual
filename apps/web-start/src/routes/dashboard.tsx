import { Link, createFileRoute } from '@tanstack/react-router'
import "./dashboard.css"
import GetCourses from '../getCourses'
import { useApiQuery, useCurrentUser } from '../integrations/api';
import type { CourseOut } from '/Users/shainazaccagnino/f25-cisc474-individual/packages/api/src/courses.ts';

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
   const { data: user } = useCurrentUser();
  const query = useApiQuery<Array<CourseOut>>(['courses'], 'course');

  const { data, refetch, error, showLoading } = query;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (showLoading) return <div>Loading...</div>;

  if (!data || data.length === 0) {
    return <div>No courses found.</div>;
  }
  return  <div className="main">
    <a className="profile-pic"></a>
    <Link to={"/edit"}>Edit/Delete/Add Courses</Link>
          <h1 className="title">Courses
                <hr className="profile-border"></hr>
                </h1>.
                <Link to={"/course"}>Course</Link>
                <GetCourses/>
                </div>
}
