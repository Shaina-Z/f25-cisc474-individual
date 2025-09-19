import { PrismaClient } from '../generated/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const courses=["Intro to Programming", "Data Structures", 
          "Web Development", "Dev Ops","Computer Architecture"]

async function main() {
  
  const users = []
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(["student", "instructor", "administrator"]),
      }
    })
    users.push(user)
  }

 
  for (let i = 0; i < 5; i++) {
    const courseUsers = faker.helpers.arrayElements(users, { min: 2, max: 5 })

    const course = await prisma.course.create({
      data: {
        title: (courses[i]!),
        users: {
          connect: courseUsers.map(u => ({ id: u.id })),
        },
        assignments: {
          create: Array.from({ length: 3 }).map(() => ({
            title: faker.lorem.words(3),
            due_date: faker.date.soon({ days: 30 }),
            submissions: faker.number.int({ min: 0, max: 20 }),
            description: faker.lorem.sentences(2),
          })),
        }
      }
    })

  }
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })