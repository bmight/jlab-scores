import { useState } from 'react'
import { useRealm } from '../hooks/useRealm'
import SessionSelector from './SessionSelector'
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap'

const Navigation: React.FC = () => {
	const { login, logout, currentUser } = useRealm()
	const [email, setEmail] = useState<string | undefined>()
	const [password, setPassword] = useState<string | undefined>()
	const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
    <Navbar color='dark' dark fixed='top' expand='md'>
			<NavbarBrand href="/">JLAB Team Score Tracker</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
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
			</Collapse>
		</Navbar>
	)
}

export default Navigation
