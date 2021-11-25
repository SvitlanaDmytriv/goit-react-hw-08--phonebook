import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistore } from './redux/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
