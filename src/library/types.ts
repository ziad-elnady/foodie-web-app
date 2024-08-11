export type ResponseObject<T> = {
	error: string | null;
	code: string;
	message: string;
	data?: T;
};
