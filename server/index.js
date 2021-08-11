const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

import Hello from '../client/src/hello';

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  const html = '<h1>ESSA</h1>';

  res.send(html);
});

app.get('/dupa', (req, res) => {
  const component = ReactDOMServer.renderToString(<Hello />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React App from Scratch</title>
  </head>
  <body>
      <div id="root">${component}</div>
      <script src="bundle.js"></script>
  </body>
  </html>`;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server now listening at http://localhost:${PORT}`);
});

