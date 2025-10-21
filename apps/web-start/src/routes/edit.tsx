import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  const [newTitle,setNewTitle] = useState('');
  return <div>
    <h1>Edit/Add</h1>
    <input
    type="text"
    placeholder='Enter Course Name'
    value={newTitle}
    onChange={(e)=> setNewTitle(e.target.value)}
    ></input>
    <button > create course</button>
  </div>;
}
