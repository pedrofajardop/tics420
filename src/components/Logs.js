const path = require('path');
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: path.join(__dirname, 'logs.log') })
  ]
});
function generateLogs() {
  logger.info('Info log: User successfully set.');
  logger.debug('Debug log: Updated value of name.');
  logger.error('Error log: Mandatory fields are empty.');
}

generateLogs();

module.exports = logger;
