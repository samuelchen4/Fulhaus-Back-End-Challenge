const express = require('express');
const connectDB = require('./database/database');
const acronymRoutes = require('./routes/acronymRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/acronym', acronymRoutes);

app.listen(5000, () => {
  console.log(`server listening on port 5000`);
});
