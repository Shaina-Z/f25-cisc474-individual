import { Link, createFileRoute } from '@tanstack/react-router';
import LoginButton from '../components/LoginButtons';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Welcome to my simple Learning Management System.
      <LoginButton />
      <hr></hr>
      <Link to="/dashboard">Courses</Link> |{' '}
      <Link to="/assignment">Assignments</Link>
    </div>
  );
}