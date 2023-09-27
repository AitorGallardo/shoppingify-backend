const express = require('express');
const cors = require('cors');
const { setUserRoutes, setItemRoutes } = require('./routes');
const { connectToDB } = require('./utils/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToDB();

setItemRoutes(app);
setUserRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;