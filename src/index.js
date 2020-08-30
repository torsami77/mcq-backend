import winston from 'winston';

import app from './app';

const port = process.env.PORT || 3000;
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});


app.listen(port, () => logger.info(`Application running on port ${port}`));
