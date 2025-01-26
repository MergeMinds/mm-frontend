import { type Response, mocksEnabled } from '$api/base';

export const fetchHealthChecker = async (): Promise<Response<{ message: string }>> => {
  if (!mocksEnabled) {
  }

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
