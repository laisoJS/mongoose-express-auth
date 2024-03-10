require('dotenv').config();

// Initialize the database
require('./database/mongo.conf.js').init();

/*
    Create the express server
*/
const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080,
      domain = process.env.DOMAIN || 'localhost';

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/auth/", require('./routes/register.js'));
app.use("/api/auth/", require('./routes/login.js'));

app.get("/protected", require('./middleware/isLoggedIn.js'), (req, res) => {
    res.send('Protected route');
});

app.listen(port, () => {
  console.log(`Server listening at http://${domain}:${port}`);
});
