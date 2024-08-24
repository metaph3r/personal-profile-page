import prisma from "@/lib/db";
import Highlights from "@/ui/highlights";
import Link from "next/link";

export default async function Page() {
  const profileData = await prisma.profileData.findMany();

  return (
    <div className="m-8 grid grid-cols-[1fr_24rem] grid-rows-1">
      <div className="col-span-1 row-span-1">
        <h1 className="text-3xl font-semibold">Metadata</h1>
        <table className="border-t border-b border-black/10 py-5 leading-8">
          <thead>
            <tr>
              <th className="font-semibold">Key</th>
              <th className="font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((data) => (
              <tr key={data.key}>
                <td>{data.key}</td>
                <td className="text-left">{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href={"/admin"}>Update metadata</Link>
      </div>
      <div className="col-span-1 row-span-1">
        <Highlights />
      </div>
    </div>
  );
}
