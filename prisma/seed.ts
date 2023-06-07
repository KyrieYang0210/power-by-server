import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordKyrie = await bcrypt.hash('123456', roundsOfHashing);

  const user1 = await prisma.account.upsert({
    where: { email: 'kyrie.yang@silksoftware.com' },
    update: {
      password: passwordKyrie,
    },
    create: {
      email: 'kyrie.yang@silksoftware.com',
      first_name: 'Kyrie',
      last_name: 'Yang',
      phone: '18181994457',
      password: passwordKyrie,
    },
  });

  console.log({ user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
