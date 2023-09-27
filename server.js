require('dotenv').config();
const express = require('express');
const app = express();

app.get('/envelopes', (req, res, next) => {
  res.json({message: 'There are your envelopes'})
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})