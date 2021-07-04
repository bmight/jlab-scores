import './App.css';
import { RealmProvider } from './hooks/useRealm'
import Navigation from './components/Navigation'
import Router from './Router';

function App() {
  return (
    <div className="App">
      <RealmProvider appId='jlab_2021-aurej'>
        <Navigation />
        <Router />
      </RealmProvider>
    </div>
  );
}

export default App;
