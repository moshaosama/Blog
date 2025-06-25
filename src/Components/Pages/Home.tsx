import Hero_Home_Page from "../molecules/Hero_Home_Page";
import FeaturePosts from "../organisms/FeaturePosts";
import RecentlyPosts from "../organisms/RecentlyPosts";

const Home = () => {
  return (
    <>
      <Hero_Home_Page />
      <FeaturePosts />
      <RecentlyPosts />
    </>
  );
};

export default Home;
