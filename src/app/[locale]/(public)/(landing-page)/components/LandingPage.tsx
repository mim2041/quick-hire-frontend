import Categories from "@/components/home/Categories";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Hero } from "@/components/home/Hero";
import { LatestJobsOpen } from "@/components/home/LatestJobsOpen";
import { PostJobsBanner } from "@/components/home/PostJobsBanner";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <PostJobsBanner />
      <FeaturedJobs />
      <LatestJobsOpen />
    </div>
  );
};

export default LandingPage;
