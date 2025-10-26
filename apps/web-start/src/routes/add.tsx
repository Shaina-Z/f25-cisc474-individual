import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useApiMutation, useCurrentUser } from '../integrations/api';
import type {CourseIn, CourseOut} from "/Users/shainazaccagnino/f25-cisc474-individual/packages/api/src/courses.ts"

export const Route = createFileRoute('/add')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: currentUser } = useCurrentUser();
  const queryClient = useQueryClient();
  const [newTitle,setNewTitle] = useState('');
  const [id, setID]=useState("");
  const mutation = useApiMutation<CourseIn, CourseOut>({
    endpoint: (variables) => ({
      path: '/course',
      method: 'POST',
    }),
    invalidateKeys: [['courses']],
  });
  const deleteMutation = useApiMutation<{id:number}>({
    endpoint: (variables) => ({
      path: `/course/${variables.id}`,
      method: 'DELETE',
    }),
    invalidateKeys: [['courses']],
  });
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
                id:0
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
          <button onClick={()=>{deleteMutation.mutate({ id: Number(id) })}}>Delete Course</button>
        </>
      )}
    </div>
  </div>;
}
