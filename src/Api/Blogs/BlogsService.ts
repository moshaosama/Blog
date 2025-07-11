import axios from "axios";
import { ParentService } from "../ParentService";

class BlogsService extends ParentService {
  createData(): void {}
  async getData(_: any, thunkAPi: any) {
    try {
      const response = await axios.get(`${this.url}/get-blogs`);
      return response.data;
    } catch (err: any) {
      return thunkAPi.rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
  async GetBlogByCategory(blog_category: string, thunkAPi: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-blogs-by-category/${blog_category}`
      );
      return response.data;
    } catch (err: any) {
      return thunkAPi.rejectWithValue(
        err?.response?.data?.message || "Something went wrong"
      );
    }
  }

  async GetBlogById(blog_id: number, thunkAPi: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-blogs-by-id/${blog_id}`
      );
      return response.data;
    } catch (err: any) {
      return thunkAPi.rejectWithValue(
        err?.response?.data?.message || "Something went wrong"
      );
    }
  }
}

export const blogService = new BlogsService();
