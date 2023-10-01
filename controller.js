const {envelopes} = require('./envelopesDb');

const appendIndex = (req,res, next) => {
  const idx = envelopes.findIndex(env => env.id === Number(req.params.id))
  req.idx = idx;
  next()
}

const getAllEnvelopes = (req, res, next) => {
  res.send(envelopes)
}

const createEnvelope = (req, res, next) => {
  const query = req.query;
  if(!query.category || !query.allocation || !query.amount){
    res.status(400).send("Please provide all the required information about the new envelope")
  }
  let id = envelopes.reduce((max,env) => {return Math.max(max, env.id)}, -Infinity)
  envelopes.push({
    id: id++,
    category: query.category,
    allocation: Number(query.allocation),
    amount_spent: Number(query.amount)
  })
  res.send(envelopes)
}

const getEnvelopeById = (req, res, next) => {
  res.json(envelopes[req.idx])
}

const deleteEnvelope = (req, res, next) => {
  const deletedEnvelope = envelopes.splice(req.idx,1)[0]
  res.json(deletedEnvelope)
}

const updateEnvelope = (req, res, next) => {
  const idx = req.idx;
  const query = req.query;
  envelopes[idx].category = query.category !== undefined ? query.category : envelopes[idx].category;
  envelopes[idx].amount_spent += query.amount !== undefined && query.amount !== null ? Number(query.amount) : 0;
  envelopes[idx].allocation = query.allocation !== undefined && query.allocation !== null ? Number(query.allocation) : envelopes[idx].allocation;
  res.send(envelopes[idx])
}

const transfer = (req, res, next) => {
  const allocation = Number(req.query.allocation);
  const idxFrom = envelopes.findIndex(env => env.id === Number(req.params.from));
  const idxTo = envelopes.findIndex(env => env.id === Number(req.params.to));
  envelopes[idxFrom].allocation -= allocation;
  envelopes[idxTo].allocation += allocation;
  res.send(envelopes)
}

module.exports = {
  getAllEnvelopes,
  createEnvelope,
  getEnvelopeById,
  deleteEnvelope,
  updateEnvelope,
  transfer,
  appendIndex
}