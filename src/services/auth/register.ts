import { Endpoints } from '@/enums/endpoints';
import { createAxiosInstance } from '@/library/api';
import { ResponseObject } from '@/library/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useRegister = () => {
	const validationSchema = z.object({
		name: z.string().min(4, 'Name must be 3 characters or more'),
		username: z.string().min(4, 'Username must be 4 characters or more'),
		password: z.string().min(1, 'Password required')
	});

	const form = useForm<z.infer<typeof validationSchema>>({
		mode: 'onSubmit',
		defaultValues: { username: '', password: '' },
		resolver: zodResolver(validationSchema)
	});

	const mutation = useMutation<ResponseObject<{ access: string }>, ResponseObject<{ access: string }>, z.infer<typeof validationSchema>>({
		mutationKey: ['auth_register'],
		mutationFn: async (payload) => {
			const api = createAxiosInstance();

			const response = await api.post(Endpoints.USERS_ROOT, payload);
			return response.data;
		}
	});

	const handleSubmit = form.handleSubmit(async (data) => {
		try {
			const response = await mutation.mutateAsync(data);

			if (response.data && response.data.access) {
				window.localStorage.setItem('access_token', response.data.access);
			}
		} catch (e) {
			const error = e as AxiosError<ResponseObject>;

			if (error.response) {
				form.setError('root', { message: error.response.data.message });
			}
		}
	});

	return { form, mutation, handleSubmit };
};
