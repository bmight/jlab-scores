import React, { useState } from "react";
import * as Realm from "realm-web";

interface RealmAppContextState  {
  realm: Realm.App
  currentUser: Realm.User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const RealmAppContext = React.createContext<RealmAppContextState | undefined>(undefined);

interface RealmAppProviderProps {
  appId: string
}

const RealmProvider: React.FC<RealmAppProviderProps> = (props) => {
  const { appId, children } = props
	const [app, setApp] = React.useState<Realm.App>(new Realm.App(appId));
	React.useEffect(() => {
		setApp(new Realm.App(appId));
	}, [appId]);

	// Wrap the Realm.App object's user state with React state
	const [currentUser, setCurrentUser] = useState<Realm.User | null>(app.currentUser);
	const login: RealmAppContextState['login'] = async (email, password) => {
		const credentials = Realm.Credentials.emailPassword(email, password)
		await app.logIn(credentials);
		// If successful, app.currentUser is the user that just logged in
		setCurrentUser(app.currentUser);
	}
	const logout = async () => {
		// Log out the currently active user
		await app.currentUser?.logOut();
		// If another user was logged in too, they're now the current user.
		// Otherwise, app.currentUser is null.
		setCurrentUser(app.currentUser);
	}

	const wrapped = { realm: app, currentUser, login, logout };

	return (
		<RealmAppContext.Provider value={wrapped}>
			{children}
		</RealmAppContext.Provider>
	);
}

const useRealm = () => {
	const app = React.useContext(RealmAppContext);
	if (!app) {
		throw new Error(
			`You must call useRealmApp() inside of a <RealmAppProvider />`
		);
	}
	return app;
};


export { RealmProvider, useRealm }