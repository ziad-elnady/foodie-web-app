import { useState } from 'react';
import LoginTab from './partials/login';
import RegisterTab from './partials/register/component';

type Props = {};

const AuthPage = (props: Props) => {
	const [isRegistering, setIsRegistering] = useState<boolean>(false);

	return (
		<>
			{!isRegistering && <LoginTab setIsRegistering={setIsRegistering} />}
			{isRegistering && <RegisterTab setIsRegistering={setIsRegistering} />}
		</>
	);
};

export default AuthPage;
