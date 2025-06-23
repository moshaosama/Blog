import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "../Api/Blogs/BlogsService";

export const fetchGetBlogs = createAsyncThunk(
  "Blogs/fetchGetBlogs",
  async (_, thunkAPI) => {
    return blogService.getData(_, thunkAPI);
  }
);
