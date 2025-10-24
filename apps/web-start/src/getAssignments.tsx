import { useQuery } from "@tanstack/react-query"
import { useBackendFetcher } from "./integrations/fetcher"

interface Assignment {
  id: string
  title: string
}

function GetAssignments() {
  const fetcher=useBackendFetcher();
  const { isPending, isError, data, error } = useQuery<Array<Assignment>>({
    queryKey: ['assignments'],
    queryFn: ()=>fetcher('/assignment'),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul>
      {data.map((assignment:{id:string, title:string}) => (
        <li key={assignment.id}>{assignment.title}</li>
      ))}
    </ul>
  )
}

export default GetAssignments