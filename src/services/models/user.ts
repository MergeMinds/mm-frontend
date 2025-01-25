export interface Credentials {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}

export interface User extends Credentials {
  email: string; // just for eslint lol
  // TODO: add necessary fields when needed
}
