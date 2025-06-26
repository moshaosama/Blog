import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetBlogs } from "../Actions/GetBlogs";
import type { AppDispatch, RootState } from "../Store/store";
import { fetchGetBlogsByCategory } from "../Actions/GetBlogsByCategory";
import { useParams } from "react-router";

const useGetBlogs = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { category_id } = useParams();
  const { Blogs } = useSelector((state: RootState) => state.Blogs);

  const { BlogByCategory, loading: BlogByCategoryLoading } = useSelector(
    (state: RootState) => state.BlogbyCategory
  );

  useEffect(() => {
    dispatch(fetchGetBlogs());
    dispatch(fetchGetBlogsByCategory(category_id as string));
  }, [dispatch, category_id]);

  return { Blogs, BlogByCategory, BlogByCategoryLoading };
};

export default useGetBlogs;
