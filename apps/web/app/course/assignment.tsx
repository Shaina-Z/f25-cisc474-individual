'use client'
import { use } from 'react'
 
export default function Assignments({
  assignments,
}: {
  assignments: Promise<{ id: string; title: string }[]>
}) {
  const allAssignments = use(assignments)
 
  return (
    <ul>
      {allAssignments.map((assignment) => (
        <li key={assignment.id}>{assignment.title}</li>
      ))}
    </ul>
  )
}