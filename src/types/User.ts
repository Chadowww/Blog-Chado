export interface User {
  id: number | undefined;
  email: string;
  password: string;
  roles: Array<string>;
}
