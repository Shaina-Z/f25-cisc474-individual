export async function getCourses() {

  const res = await fetch(process.env.BACKEND_URL + "course")
  const data = await res.json()

  
  return data.slice(0, 10).map((course: { id: string; title: string }) => ({
    id: course.id.toString(),
    title: course.title,
  }))
}