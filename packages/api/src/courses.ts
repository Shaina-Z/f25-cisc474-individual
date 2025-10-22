import { z } from 'zod';


export const CourseOut= 
    z.object({
        id:z.number(),
        title:z.string()

    })
export type CourseOut = z.infer<typeof CourseOut>

export const CourseIn =
    z.object({
        id:z.number(),
        title:z.string()
    })
export type CourseIn = z.infer<typeof CourseIn>

export const CourseUpdate = z.object({
   id:z.number(),
    title:z.string()
});
export type CourseUpdate = z.infer<typeof CourseUpdate>;