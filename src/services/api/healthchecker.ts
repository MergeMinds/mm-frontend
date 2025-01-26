import { type Response } from '$api/base';

export const fetchHealthChecker = async (): Promise<Response<{ message: string }>> => {
  return new Promise<Response<{ message: string }>>((resolve) =>
    setTimeout(
      () =>
        resolve({
          status: 200,
          message: 'Hello, World!',
        }),
      2000,
    ),
  );
};
