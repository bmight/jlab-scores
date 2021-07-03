import './App.css';
import {RealmProvider} from './hooks/useRealm'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <RealmProvider appId='jlab_2021-aurej'>
        <Main />
      </RealmProvider>
    </div>
  );
}

export default App;
