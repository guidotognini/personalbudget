require('dotenv').config();
const express = require('express');
const app = express();
const {envelopes, budget} = require('./envelopesDb');
const fs = require('fs');

app.get('/envelopes', (req, res, next) => {
  res.json(envelopes)
})

app.get('/envelopes/:id', (req, res, next) => {
  const envelopeIndex = envelopes.findIndex(env => env.id === Number(req.params.id))
  res.json(envelopes[envelopeIndex])
})

app.post('/envelopes', (req, res, next) => {
  let id = envelopes.reduce((max,env) => {return Math.max(max, env.id)}, -Infinity)
  envelopes.push({
    id: id++,
    category: req.query.category,
    allocation: Number(req.query.allocation),
    amount_spent: Number(req.query.amount)
  })
  res.send(envelopes)
})

console.log(budget)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})

/* const categoryIndex = envelopes.findIndex(env => env.category = env.req.category) */