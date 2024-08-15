import prisma from "@/lib/db";
import Link from "next/link";

export default async function Page() {
  const profileData = await prisma.profileData.findMany();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
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
    </main>
  );
}
