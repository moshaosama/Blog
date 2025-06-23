import useGetBlogs from "../../Hooks/useGetBlogs";
import { TextAnimation } from "../Atomic/TextAnimation";
import PostDetailInfo from "../molecules/PostDetailInfo";
import Sections from "../templates/Sections";

const RecentlyPosts = () => {
  const { Blogs } = useGetBlogs();

  return (
    <Sections GridColumns={3} Title={"Recent Posts"}>
      {Blogs.result.slice(0, 6).map((blog) => (
        <div className="flex justify-center">
          <PostDetailInfo
            Header={blog.category}
            Height="15pc"
            Width="100%"
            ImageUrl={blog.image}
            flexDirection="column"
            textAnimation={<TextAnimation Title={blog.title} fontSize="20px" />}
          />
        </div>
      ))}
    </Sections>
  );
};

export default RecentlyPosts;
