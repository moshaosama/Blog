import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "../Api/Blogs/BlogsService";

export const fetchGetBlogsByCategory = createAsyncThunk(
  "Blogs/fetchGetBlogsByCategory",
  async (blog_category: string, thunkAPi: any) => {
    return blogService.GetBlogByCategory(blog_category, thunkAPi);
  }
);
