import prisma from "@/lib/db";
import Link from "next/link";

export default async function Page() {
  const metadata = await prisma.metadata.findMany();

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
          {metadata.map((metadata) => (
            <tr key={metadata.key}>
              <td>{metadata.key}</td>
              <td className="text-left">{metadata.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href={"/admin"}>Update metadata</Link>
    </main>
  );
}
