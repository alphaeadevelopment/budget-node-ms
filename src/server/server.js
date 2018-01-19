import express from 'express';
import bodyParser from 'body-parser';
import config from '@alphaeadev/config-client';
config.init('http://config-server-test.alphaea.uk', 'budget-node-ms', process.env.ENV)
  .then(() => {
    const budgetRouter = require('./budget').default;
    const port = Number(config.getOr('port', 3001));
    const app = express();
    app.use('/budgets', budgetRouter);
    app.listen(port, () => {
      console.log('Listening on %s', port)
    });
  });
