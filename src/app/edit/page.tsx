import { createOrUpdateBio } from "@/actions/bio";
import prisma from "@/lib/db";
import { PencilIcon } from "@heroicons/react/20/solid";

export default async function Edit() {
  const bio = await prisma.content.findFirst({
    where: {
      type: "BIO",
    },
  });

  return (
    <>
      <form action={createOrUpdateBio}>
        <div className="grid gap-y-3">
          <textarea
            className="form-textarea"
            name="text"
            draggable="true"
            rows={10}
            defaultValue={bio?.text}
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
