import { useMutation } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type {CourseUpdate} from "@/repo/api/courses"
export const Route = createFileRoute('/edit')({
  component: RouteComponent,
});

function RouteComponent() {
   const mutation = useMutation<void, Error, { title: string }>({
    mutationFn: async (newCourse) => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}course`, {
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
  const deleteMutation = useMutation<void, Error, number>({
  mutationFn: async (id) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}course/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete course');
    }

    return res.json();
  },
});
const updateMutation = useMutation({
  mutationFn: async (data: { id: number; update: CourseUpdate }) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}course/${id}`, {
      method: 'PATCH',
    });

    if (!res.ok) {
      throw new Error('Failed to edit course');
    }

    return res.json();
  },
});
  const [newTitle,setNewTitle] = useState('');
  const [id, setID]=useState("");
  return <div>
    <h1>/Add</h1>
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
    <h2>Delete</h2>
    <input
    type="text"
    placeholder='Enter Course ID'
    value={id}
    onChange={(e)=> setID(e.target.value)}
    ></input>
          <button onClick={()=>{deleteMutation.mutate(Number(id))}}>Delete Course</button>
        </>
      )}
    </div>
    <h3>Edit</h3>
     <input
    type="text"
    placeholder='Enter Course ID'
    value={id}
    onChange={(e)=> setID(e.target.value)}
    ></input>
    <input
    type="text"
    placeholder='Enter Course Name'
    value={newTitle}
    onChange={(e)=> setNewTitle(e.target.value)}
    ></input>
   <button onClick={()=>{updateMutation.mutate(Number(id),newTitle)}}>Delete Course</button>
  </div>;
}
