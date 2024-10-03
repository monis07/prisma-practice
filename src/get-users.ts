import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const users = await prisma.user.findMany({});
  console.log(users)

//   console.log(Array.isArray(users))

  //the thing is it gives u svery nice types so we can also apply for loop on this array

//   const users1 = await prisma.user.findUnique({
//     where:{
//         id:3
//     }
//   })

//   console.log(users1)

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