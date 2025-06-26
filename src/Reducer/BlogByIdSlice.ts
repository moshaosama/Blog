import { createSlice } from "@reduxjs/toolkit";
import { fetchGetBlogsById } from "../Actions/GetBlogById";

interface initialState {
  BlogById: {
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
  BlogById: {
    result: [],
    statusbar: "",
  },
  loading: false,
  error: "",
};

const blogByIdSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBlogsById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetBlogsById.fulfilled, (state, action) => {
      state.loading = false;
      state.BlogById = action.payload;
    });
    builder.addCase(fetchGetBlogsById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload! as string;
    });
  },
});

export default blogByIdSlice.reducer;
