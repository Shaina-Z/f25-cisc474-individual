import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Both of these should take you to pages with backend data
    <h1><Link to={"/dashboard"}>Dashboard</Link>
    <Link to={"/course"}>Single Course</Link></h1>
  </div>;
}
