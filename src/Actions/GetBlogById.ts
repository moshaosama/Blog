import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "../Api/Blogs/BlogsService";

export const fetchGetBlogsById = createAsyncThunk(
  "Blogs/fetchGetBlogsById",
  async (blog_id: number, thunkAPi: any) => {
    return blogService.GetBlogById(blog_id, thunkAPi);
  }
);
