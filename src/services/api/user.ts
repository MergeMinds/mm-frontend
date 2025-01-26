import { type Response, mocksEnabled } from '$api/base';
import type { UserCredentials, User } from '$models/user';

export const fetchUserCredentials = async (id: number): Promise<Response<UserCredentials>> => {
  if (!mocksEnabled) {
    console.log(id);
  }

  return new Promise<Response<UserCredentials>>((resolve) =>
    setTimeout(
      () => resolve({
        status: 200,
        id: 1,
        firstName: 'Иван',
        lastName: 'Петров',
        username: 'ipetrov2002',
      }),
      2000,
    ),
  );
};

export const fetchUser = async (id: number): Promise<Response<User>> => {
  if (!mocksEnabled) {
    console.log(id);
  }

  return new Promise<Response<User>>((resolve) =>
    setTimeout(
      () => resolve({
        status: 200,
        id: 1,
        firstName: 'Иван',
        lastName: 'Петров',
        username: 'ipetrov2002',
        email: "ipetrov2002@mail.ru"
      }),
      2000,
    ),
  );
};

export const fetchSessionUserCredentials = async (): Promise<Response<UserCredentials>> => {
  if (!mocksEnabled) {
  }

  return new Promise<Response<UserCredentials>>((resolve) =>
    setTimeout(
      () => resolve({
        status: 200,
        id: 1,
        firstName: 'Иван',
        lastName: 'Петров',
        username: 'ipetrov2002',
      }),
      2000,
    ),
  );
};

export const fetchSessionUser  = async (): Promise<Response<User>> => {
  if (!mocksEnabled) {
  }

  return new Promise<Response<User>>((resolve) =>
    setTimeout(
      () => resolve({
        status: 200,
        id: 1,
        firstName: 'Иван',
        lastName: 'Петров',
        username: 'ipetrov2002',
        email: "ipetrov2002@mail.ru"
      }),
      2000,
    ),
  );
};
