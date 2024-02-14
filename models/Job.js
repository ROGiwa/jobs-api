const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: {
    typeof: 'string',
    required: [true, 'Please provide a company'],
    maxLength: 50,
  },
  position: {
    typeof: 'string',
    required: [true, 'Please provide a position'],
    maxLength: 100,
  },
  status: {
    type: 'string',
  },
});
