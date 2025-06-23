export abstract class ParentService {
  url = "https://blogsserver-production.up.railway.app/get-blogs";

  abstract getData(_: any, thunkAPi: any): void;
  abstract createData(): void;
}
