import { notFound } from "next/navigation";
import { PageContentWrapper, ContentWrapper } from "@/components/wrappers";
import { jobsApi } from "@/core/api";
import { JobDetailClient } from "./JobDetailClient";

interface JobDetailPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;

  let job;
  try {
    job = await jobsApi.getById(id);
    console.log(job);
  } catch (err: unknown) {
    const status =
      err && typeof err === "object" && "response" in err
        ? (err as { response?: { status?: number } }).response?.status
        : undefined;
    if (status === 404 || status === 400) notFound();
    throw err;
  }

  if (!job) notFound();

  return (
    <PageContentWrapper
      directions={[
        { label: "Home", link: "/" },
        { label: "Jobs", link: "/jobs" },
        { label: job.title, link: `/jobs/${id}` },
      ]}
      spacing="md"
    >
      <ContentWrapper padding="lg">
        <JobDetailClient job={job} />
      </ContentWrapper>
    </PageContentWrapper>
  );
}
