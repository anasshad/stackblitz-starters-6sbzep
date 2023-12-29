const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');

const app = express();
const port = 3000;

mongoose.connect(
  'mongodb+srv://aleyankhan8:<password>@cluster0.oubuovq.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
