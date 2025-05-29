import { useEffect, useState } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // Define mobile as width <= 768px
		};

		handleResize(); // Set the initial value
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};

export default useIsMobile;