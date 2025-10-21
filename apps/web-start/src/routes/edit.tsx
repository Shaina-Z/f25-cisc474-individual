import { useMutation } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
});

function RouteComponent() {
   const mutation = useMutation<void, Error, { title: string }>({
    mutationFn: async (newCourse) => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/course`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      return res.json() 
    },
  })

  const [newTitle,setNewTitle] = useState('');
  return <div>
    <h1>Edit/Add</h1>
    <input
    type="text"
    placeholder='Enter Course Name'
    value={newTitle}
    onChange={(e)=> setNewTitle(e.target.value)}
    ></input>
     <div>
      {mutation.isPending ? (
        'Adding course...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Course added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ title: newTitle })
            }}
          >
            Create Course
          </button>
        </>
      )}
    </div>
  </div>;
}
