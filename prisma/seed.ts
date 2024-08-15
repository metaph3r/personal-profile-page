import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialMetadata: Prisma.ProfileDataCreateInput[] = [
  {
    key: "FIRST_NAME",
    display_name: "First name",
  },
  {
    key: "LAST_NAME",
    display_name: "Last name",
  },
  {
    key: "EMAIL",
    display_name: "Email address",
  },
  {
    key: "ROLE",
    display_name: "Role",
  },
  {
    key: "LOCATION",
    display_name: "Location",
  },
];

async function main() {
  console.log("Start seeding...");

  for (const metadata of initialMetadata) {
    const newEntry = await prisma.profileData.create({
      data: metadata,
    });

    console.log(`Created metadata entry: ${newEntry.key}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
