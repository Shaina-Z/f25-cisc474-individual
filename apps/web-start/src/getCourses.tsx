import { useQuery } from "@tanstack/react-query"
import { useBackendFetcher } from "./integrations/fetcher"

interface Course {
  id: string
  title: string
}

function GetCourses() {
  const fetcher=useBackendFetcher();
  const { isPending, isError, data, error } = useQuery<Array<Course>>({
    queryKey: ['courses'],
    queryFn: ()=>fetcher('/course'),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul>
      {data.map((course:{id:string, title:string}) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  )
}

export default GetCourses