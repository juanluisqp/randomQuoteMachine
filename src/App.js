import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import store from './redux/store';
import ResultadoQuote from './components/buscador/ResultadoQuote';





function App() {
  
  return (
    <Provider store={store}>
    <div className="App container">
      <div className="row">
        <div className='col-12 mt-5'>
          <ResultadoQuote />
        </div>
      </div>      
    </div>
    </Provider>
  );
}

export default App;
