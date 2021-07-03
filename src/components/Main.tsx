import { useState } from 'react'
import { useRealm } from '../hooks/useRealm'

const Main: React.FC = () => {
	const { login, logout, currentUser } = useRealm()
	const [email, setEmail] = useState<string | undefined>()
	const [password, setPassword] = useState<string | undefined>()

	const handleLogin = async () => {
		try {
			if (email && password) {
				await login(email, password);
			} else {
				throw new Error('E-Mail and Password are required!')
			}
		} catch (err) {
			alert(err.message)
		}
	};

	return (
		<div>
			{currentUser
				? <>
					<p>
						{currentUser.profile.email}
					</p>
					<button onClick={() => logout()}>Logout</button>
				</>
				: <>
					<input
						type="email"
						placeholder="your.email@example.com"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
					<button onClick={handleLogin}>Login</button>
				</>
			}
		</div>
	)
}

export default Main
