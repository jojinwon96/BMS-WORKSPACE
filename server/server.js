const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const testRoutes = require('./router/testRoutes')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/test', testRoutes)

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
