import { Link, createFileRoute } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useApiMutation } from '../integrations/api';
import type { CourseIn, CourseUpdate } from '../../../../packages/api/src/courses';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
    const queryClient = useQueryClient();
  const [newTitle,setNewTitle] = useState('');
  const [id, setID]=useState("");
   const updateMutation = useApiMutation<CourseIn, CourseUpdate>({
      endpoint: (variables) => ({
        path: `/course/${variables.id}`,
        method: 'PATCH',
      }),
      invalidateKeys: [['courses']],
    });
  return (
    <div>
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
    <div>
      {updateMutation.isPending ? (
        'Editing course...'
      ) : (
        <>
          {updateMutation.isError ? (
            <div>An error occurred: {updateMutation.error.message}</div>
          ) : null}

          {updateMutation.isSuccess ? <div>Edited Course!</div> : null}
   <button onClick={()=>{updateMutation.mutate({
    id: Number(id),
    title: newTitle,
  })}}>Edit Course</button>
  </>
      )}
  </div>
  <h2><Link to="/dashboard">Back to Courses</Link></h2>
  </div>
  );
}