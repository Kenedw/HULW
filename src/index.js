import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rota from './MainRoute';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Rota />, document.getElementById('root'));
registerServiceWorker();
