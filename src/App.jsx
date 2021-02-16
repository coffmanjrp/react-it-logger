import { useEffect } from 'react';
import { SearchBar } from './components/layout';
import { Logs } from './components/logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init materialize.js
    M.AutoInit();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  );
};

export default App;
