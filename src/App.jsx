import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AddBtn, SearchBar } from './components/layout';
import { AddLogModal, EditLogModal, Logs } from './components/logs';
import { AddTechModal, TechListModal } from './components/techs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init materialize.js
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
};

export default App;
