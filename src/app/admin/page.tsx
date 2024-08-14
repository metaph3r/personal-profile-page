import prisma from "@/lib/db";
import { updateMetadata } from "@/lib/metadata/actions";
import { MetadataType } from "@/lib/metadata/MetadataType";
import Link from "next/link";

export default async function Page() {
  const metadata = await prisma.metadata.findMany();

  function getMetadataRow(key: MetadataType) {
    const rowMetadata = metadata.find((x) => x.key === key);

    return (
      <tr key={rowMetadata?.key}>
        <td>{rowMetadata?.display_name}:</td>
        <td>
          <input
            type="text"
            className="border-2 mx-2"
            name={rowMetadata?.key}
            defaultValue={rowMetadata?.value || ""}
          />
        </td>
      </tr>
    );
  }

  return (
    <main>
      <div className="flex justify-center">
        <h1>Edit metadata</h1>
        <form className="my-4" action={updateMetadata}>
          <table className="border-separate border-spacing-2 border-0">
            <tbody>
              {getMetadataRow(MetadataType.FirstName)}
              {getMetadataRow(MetadataType.LastName)}
              {getMetadataRow(MetadataType.Email)}
            </tbody>
          </table>
          <button
            className="bg-blue-500 py-2 text-white rounded-sm"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Link href="/">Home</Link>
    </main>
  );
}
