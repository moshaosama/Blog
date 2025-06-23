import Hero from "../molecules/Hero";
import FeaturePosts from "../organisms/FeaturePosts";
import RecentlyPosts from "../organisms/RecentlyPosts";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturePosts />
      <RecentlyPosts />
    </>
  );
};

export default Home;
