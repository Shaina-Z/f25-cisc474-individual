import { z } from 'zod';

export const CourseOut= 
    z.object({
        id:z.number(),
        title:z.string()

    })
export type CourseOut = z.infer<typeof CourseOut>

export const CourseIn =
    z.object({
        id:z.number,
        title:z.string
    })
export type CourseIn = z.infer<typeof CourseIn>