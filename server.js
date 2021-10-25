const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/html/index');
const apiRoutes = require('./routes/api/notes')

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server is on port 3001!`);
});