import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data:{
        title : 'Prisma ORM',
        content:"Learning Prisma ORM",
        published : true,
        //this tells that this post belongs to author with id 1
        author:{
          connect:{
            id:1
          }
        }
        // or u can write authorId: 1
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