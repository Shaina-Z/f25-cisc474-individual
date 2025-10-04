export async function getCourses() {

  const res = await fetch("http://localhost:3000/course")
  const data = await res.json()

  
  return data.slice(0, 10).map((course: { id: string; title: string }) => ({
    id: course.id.toString(),
    title: course.title,
  }))
}