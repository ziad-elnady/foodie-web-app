export type ResponseObject<T = Record<string, unknown>> = {
	error: string | null;
	code: string;
	message: string;
	data?: T;
};
