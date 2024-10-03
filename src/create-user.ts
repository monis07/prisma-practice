import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email : 'monisazeemf@gmail.com',
        name : 'Monis Azeem',
    }
  })

   
}

main()
  .then(async () => {
    console.log("Done with the query")
    await prisma.$disconnect()
    console.log("prisma disconnected successfully")
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })