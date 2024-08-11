import { useState } from 'react';
import LoginTab from './partials/login';
import RegisterTab from './partials/register/component';

type Props = {};

const AuthPage = (props: Props) => {
	const [isRegistering, setIsRegistering] = useState<boolean>(false);

	if (isRegistering) return <RegisterTab setIsRegistering={setIsRegistering} />;
	else return <LoginTab setIsRegistering={setIsRegistering} />;
};

export default AuthPage;
