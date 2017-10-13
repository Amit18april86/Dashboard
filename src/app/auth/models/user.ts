export interface Authenticate {
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  token: string;
}
