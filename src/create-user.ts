import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  for(let i=0;i<10;i++){
    await prisma.user.create({
      data:{
          name: 'Monis',
          bio : 'I am a software engineer',
          blogs_published : 10
      }
    })
  }
  
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