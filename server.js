const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/booklist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  //use routes
  const bookRoutes = require('./routes/books');
app.use('/api', bookRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
