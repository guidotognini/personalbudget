require('dotenv').config();
const express = require('express');
const app = express();
const {envelopes} = require('./envelopesDb');
const {getAllEnvelopes, createEnvelope, getEnvelopeById, deleteEnvelope, updateEnvelope, transfer, appendIndex} = require('./controller');

const port = process.env.PORT || 4001;

const router = express.Router();

router.param('id', appendIndex)

router.route('/')
  .get(getAllEnvelopes)
  .post(createEnvelope)
 
router.route('/:id')
  .get(getEnvelopeById)
  .delete(deleteEnvelope)

router.put('/:id/usemoney', updateEnvelope)

router.post('/transfer/:from/:to', transfer)

app.use('/envelopes', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
