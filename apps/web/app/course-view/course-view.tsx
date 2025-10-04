'use client'
import { use } from 'react'
 
export default function Courses({
  courses,
}: {
  courses: Promise<{ id: string; title: string }[]>
}) {
  const allCourses = use(courses)
 
  return (
    <ul>
      {allCourses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  )
}