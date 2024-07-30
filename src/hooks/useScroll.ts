import { useEffect, useState } from 'react';

export const useScroll = () => {
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		window.addEventListener('scroll', () => {
			setScrollY(window.scrollY);
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return scrollY;
};
