import React, { useState } from "react";
import * as Realm from "realm-web";
import {  ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

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
			<RealmApolloProvider appId={appId} realm={app}>
				{children}
			</RealmApolloProvider>
		</RealmAppContext.Provider>
	);
}

interface RealmApolloProviderProps {
	appId: String
	realm: Realm.App
}

const RealmApolloProvider: React.FC<RealmApolloProviderProps> = (props) => {
	const { appId, realm, children } = props

	const client = new ApolloClient({
		link: new HttpLink({
			uri: `https://realm.mongodb.com/api/client/v2.0/app/${appId}/graphql`,
			// We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
			// The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
			// access token before sending the request.
			fetch: async (uri, options) => {
				if(realm.currentUser && options) {
					console.log(realm.currentUser.accessToken)
					await realm.currentUser.refreshCustomData();
					const headers: HeadersInit = {
						'Authorization': `Bearer ${realm.currentUser.accessToken}`
					}
					options.headers = headers
				}
				console.log({ options })
				return fetch(uri, options);
			},
		}),
		cache: new InMemoryCache()
	});

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	)
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