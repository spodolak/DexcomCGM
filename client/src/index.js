import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// const cors = require('cors');
// App.use(
//   cors({
//   origin: "http://localhost:3000",
//   // methods: ["GET", "POST"],
//   })
// );

// App.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.send({ "msg": "This has CORS enabled 🎈" })
//   })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();