import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetBlogs } from "../Actions/GetBlogs";
import type { AppDispatch, RootState } from "../Store/store";
import { fetchGetBlogsByCategory } from "../Actions/GetBlogsByCategory";
import { useParams } from "react-router";
import { fetchGetBlogsById } from "../Actions/GetBlogById";
const useGetBlogs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category_id, blog_id } = useParams();
  const { Blogs } = useSelector((state: RootState) => state.Blogs);

  const { BlogByCategory, loading: BlogByCategoryLoading } = useSelector(
    (state: RootState) => state.BlogbyCategory
  );

  const { BlogById, loading: BlogByIdLoading } = useSelector(
    (state: RootState) => state.BlogbyId
  );

  useEffect(() => {
    dispatch(fetchGetBlogs());
    dispatch(fetchGetBlogsByCategory(category_id as string));
    dispatch(fetchGetBlogsById(Number(blog_id)));
  }, [dispatch, category_id]);

  return {
    Blogs,
    BlogByCategory,
    BlogByCategoryLoading,
    BlogById,
    BlogByIdLoading,
  };
};

export default useGetBlogs;
