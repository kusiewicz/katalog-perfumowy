const express = require('express');
const app = express();
const PORT = 3001;

const path = require('path');

app.use('/static', express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/essa', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server now listening at http://localhost:${PORT}`);
});
