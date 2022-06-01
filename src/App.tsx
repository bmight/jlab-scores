import './App.css';
import { RealmProvider } from './hooks/useRealm'
import Router from './Router';

function App() {
  return (
    <RealmProvider appId='jlab_2021-aurej'>
      <Router />
    </RealmProvider>
  );
}

export default App;
