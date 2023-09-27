const app = require('./app');
const { connectToDB } = require('./utils/db');

const PORT = process.env.PORT || 3000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1);
  });