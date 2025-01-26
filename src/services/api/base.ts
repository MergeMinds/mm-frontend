export const mocksEnabled = true;

export interface BaseResponse {
	status: number;
}

export type Response<T> = BaseResponse & T;