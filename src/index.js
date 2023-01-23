import ReactDOM from 'react-dom/client';
import App from './App';
import "./Scss/index.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
);