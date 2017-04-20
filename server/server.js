const express = require('express');
const path = require('path');

const app = express();
PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log('SERVER ON PORT ', PORT));
