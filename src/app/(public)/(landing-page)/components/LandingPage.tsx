import Categories from "@/components/home/Categories";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Hero } from "@/components/home/Hero";
import { PostJobsBanner } from "@/components/home/PostJobsBanner";


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <PostJobsBanner />
      <FeaturedJobs />
    </div>
  );
};

export default LandingPage;
