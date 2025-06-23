import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetBlogs } from "../Actions/GetBlogs";
import type { AppDispatch, RootState } from "../Store/store";

const useGetBlogs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { Blogs, loading, error } = useSelector(
    (state: RootState) => state.Blogs
  );

  useEffect(() => {
    dispatch(fetchGetBlogs());
  }, [dispatch]);

  return { Blogs, loading, error };
};

export default useGetBlogs;
