import type { Credentials, User } from '$models/user';

const mocksEnabled = true;

export interface BaseResponse {
  status: number;
  message?: string;
}

export type Response<T> = BaseResponse & T;

export const fetchUserCredentials = async (id: number): Promise<Response<Credentials>> => {
  if (!mocksEnabled) {
    console.log(id);
  }

  return new Promise<Response<Credentials>>(() =>
    setTimeout(
      () => ({
        id: 1,
        firstName: 'Robert',
        lastName: 'Tolstov',
        username: 'robertproducts',
      }),
      2000,
    ),
  );
};

export const fetchUser = async (id: number): Promise<Response<User>> => {
  if (!mocksEnabled) {
    console.log(id);
  }

  return new Promise<Response<User>>(() =>
    setTimeout(
      () => ({
        id: 1,
        firstName: 'Robert',
        lastName: 'Tolstov',
        username: 'robertproducts',
      }),
      2000,
    ),
  );
};
