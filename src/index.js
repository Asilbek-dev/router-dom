import { StrictMode } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './component/App';
// import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,

  document.getElementById('root')
);



