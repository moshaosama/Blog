import { createSlice } from "@reduxjs/toolkit";

import { fetchGetBlogsByCategory } from "../Actions/GetBlogsByCategory";

interface initialState {
  BlogByCategory: {
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
  BlogByCategory: {
    result: [],
    statusbar: "",
  },
  loading: false,
  error: "",
};

const blogByCategorySlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBlogsByCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetBlogsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.BlogByCategory = action.payload;
    });
    builder.addCase(fetchGetBlogsByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload! as string;
    });
  },
});

export default blogByCategorySlice.reducer;
