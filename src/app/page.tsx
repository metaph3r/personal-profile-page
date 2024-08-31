import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import Highlights from "@/ui/highlights";
import { PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

async function EditButton() {
  const session = await verifySession();

  if (session.isAuth) {
    return (
      <div className="text-center">
        <Link href={"/edit"}>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
            Edit
          </button>
        </Link>
      </div>
    );
  }
}

export default async function Page() {
  const bio = await prisma.content.findFirst({
    where: {
      type: "BIO",
    },
  });

  return (
    <div className="m-8 grid grid-cols-[1fr_24rem] grid-rows-1">
      <div className="col-span-1 row-span-1">
        <div className="m-2 p-2 text-justify">{bio?.text}</div>
        <EditButton />
      </div>
      <div className="col-span-1 row-span-1">
        <Highlights />
      </div>
    </div>
  );
}
