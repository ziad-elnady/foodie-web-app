import axios from 'axios';

export const createAxiosInstance = () => {
	const instance = axios.create({ baseURL: 'http://localhost:3001/api' });

	return instance;
};
