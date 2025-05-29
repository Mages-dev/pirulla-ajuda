import React, { ReactNode, useState, useEffect } from 'react';

interface UserLoginFormProps {
	children: ReactNode;
}

const UserLoginForm: React.FC = () => {
	return (
		<>
		<form method="POST">
			<input name='user'></input>
			<input name='pass' type='password'></input>
			<button>Login</button>
			<button>Registrar</button>
		</form>
		</>
	);
};
export default UserLoginForm;