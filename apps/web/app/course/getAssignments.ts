export async function getAssignments() {

  const res = await fetch(process.env.BACKEND_URL + "assignment")
  const data = await res.json()

  
  return data.slice(0, 10).map((assignment: { id: string; title: string }) => ({
    id: assignment.id.toString(),
    title: assignment.title,
  }))
}