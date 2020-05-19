require('dotenv').config();

const express = require('express');

const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./helper/logger');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(async (error, req, res) => {
  if (error) {
    logger.error(error);
    return res.status(500).json({ error: 'Houve um erro no servidor' });
  }
});

app.listen(process.env.PORT || 3001, () =>
  logger.info(`Mail Service ok on port: ${process.env.PORT || 3001}`)
);
