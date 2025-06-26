import { createSlice } from "@reduxjs/toolkit";
import { fetchGetBlogs } from "../Actions/GetBlogs";
import { fetchGetBlogsByCategory } from "../Actions/GetBlogsByCategory";

interface initialState {
  Blogs: {
    result: {
      category: string;
      date: string;
      id: number;
      image: string;
      tags: string;
      title: string;
    }[];
    statusbar: string;
  };
  loading: boolean;
  error: string;
}

const initialState: initialState = {
  Blogs: {
    result: [],
    statusbar: "",
  },
  loading: false,
  error: "",
};

const blogSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.Blogs = action.payload;
    });
    builder.addCase(fetchGetBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload! as string;
    });
  },
});

export default blogSlice.reducer;
