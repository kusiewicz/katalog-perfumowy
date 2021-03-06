const express = require('express');
const app = express();

const path = require('path');

app.use('/static', express.static(path.join(__dirname, '..', '..', 'client', 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'public', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
