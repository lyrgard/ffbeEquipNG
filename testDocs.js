const path = require('path');
const express = require('express');

const app = express();

app.use('/ffbeEquipNG', express.static(path.join(__dirname, '/docs-dev/')));

app.listen(3001);
