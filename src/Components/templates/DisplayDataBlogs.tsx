import useGetBlogs from "../../Hooks/useGetBlogs";
import { TextAnimation } from "../Atomic/TextAnimation";
import PostDetailInfo from "../molecules/PostDetailInfo";

const DisplayDataBlogs = () => {
  const { BlogByCategory, BlogByCategoryLoading } = useGetBlogs();

  if (BlogByCategory.result.length === 0) {
    return (
      <h1 className="text-center my-20 text-4xl font-bold text-red-500">
        No Data yet
      </h1>
    );
  }

  return (
    <>
      {BlogByCategoryLoading ? (
        <h1 className="text-center text-2xl font-bold text-white my-4">
          Loading...
        </h1>
      ) : (
        <div className="mx-20 max-sm:mx-0 my-20 grid grid-cols-3 max-sm:grid-cols-1 gap-5 max-sm:gap-0 max-sm:gap-y-10">
          {BlogByCategory.result.map((blog, index: number) => (
            <div key={index}>
              <PostDetailInfo
                Header={blog.category}
                Date={blog.date}
                Height="15pc"
                Width="100%"
                ImageUrl={"/" + blog.image}
                flexDirection="column"
                textAnimation={
                  <TextAnimation Title={blog.title} fontSize="20px" />
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayDataBlogs;
