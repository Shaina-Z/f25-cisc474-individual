import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>
    <input
    type="text"
    placeholder='Enter Course Name'></input>
  </div>;
}
