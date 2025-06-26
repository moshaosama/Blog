import useGetBlogs from "../../Hooks/useGetBlogs";
import BoxImage from "../Atomic/BoxImage";
import ButtonTags from "../Atomic/ButtonTags";

const ImageDetailsCategoryId = () => {
  const { BlogById } = useGetBlogs();

  return (
    <BoxImage
      Height="40pc"
      ImageURL={"/" + BlogById.result[0]?.image}
      Width={"100%"}
      isText={true}
    >
      <div className="flex justify-center">
        <div className="absolute top-1/2 text-center flex flex-col gap-3">
          <ButtonTags
            Title={"#" + BlogById.result[0]?.category}
            BackGround="black"
          />
          <h1 className="text-5xl font-bold max-sm:text-3xl">
            {BlogById.result[0]?.title}
          </h1>
        </div>
      </div>
    </BoxImage>
  );
};

export default ImageDetailsCategoryId;
