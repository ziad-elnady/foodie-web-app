import type { FieldErrors, UseFormReturn } from 'react-hook-form';

export const getInputErrors = (form: UseFormReturn<any>, name: string) => {
	const error = (form.formState.errors as FieldErrors)[name];
	return error ? (error.message as string) : '';
};
