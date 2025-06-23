export abstract class ParentService {
  url = "http://localhost:5000";

  abstract getData(_: any, thunkAPi: any): void;
  abstract createData(): void;
}
