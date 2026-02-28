import { PageContentWrapper, ContentWrapper } from "@/components/wrappers";
import { JobsListingsClient } from "./JobsListingsClient";

export default function JobsPage() {
  return (
    <PageContentWrapper
      directions={[
        { label: "Home", link: "/" },
        { label: "Jobs", link: "/jobs" },
      ]}
      spacing="md"
    >
      <ContentWrapper padding="lg">
        <JobsListingsClient />
      </ContentWrapper>
    </PageContentWrapper>
  );
}
