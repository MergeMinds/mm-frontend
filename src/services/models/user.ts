export interface UserCredentials {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}

export interface User extends UserCredentials {
  email: string; // just for eslint lol
  // TODO: add necessary fields when needed
}
