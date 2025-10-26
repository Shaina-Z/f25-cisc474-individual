import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useApiMutation } from '../integrations/api';
import type {CourseIn, CourseOut, CourseUpdate} from "/Users/shainazaccagnino/f25-cisc474-individual/packages/api/src/courses.ts"

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  const queryClient = useQueryClient();

  const mutation = useApiMutation<CourseIn, CourseOut>({
    endpoint: (variables) => ({
      path: '/courses',
      method: 'POST',
    }),
    invalidateKeys: [['courses']],
  });
  const deleteMutation = useApiMutation<CourseIn, CourseOut>({
    endpoint: (variables) => ({
      path: '/courses',
      method: 'DELETE',
    }),
    invalidateKeys: [['courses']],
  });
  const updateMutation = useApiMutation<CourseIn, CourseOut>({
    endpoint: (variables) => ({
      path: '/courses',
      method: 'PATCH',
    }),
    invalidateKeys: [['courses']],
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
              mutation.mutate({
                title: newTitle,
                id: 0
              })
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
   <button onClick={()=>{updateMutation.mutate({
    id: Number(id),
    update: {
      title: 'Updated Course Title',
      id: Number(id)
    },
  })}}>Edit Course</button>
  </div>;
}
