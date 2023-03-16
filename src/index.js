import ReactDOM from 'react-dom/client';
import App from './App';
import "./Scss/index.css";
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </HashRouter>
);