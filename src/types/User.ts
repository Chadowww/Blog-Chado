export interface User {
  id: number;
  email: string;
  userIdentifier: string;
  roles: string[];
  password: string;
  verified: boolean;
}
