import { ListItems } from "@/components/list-items";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createAt: "desc" },
  });
  return (
    <main>
      {/* {JSON.stringify(jobs)} */}
      {jobs.map((job) => (
        <ListItems key={job.id} job={job} />
      ))}
    </main>
  );
}
