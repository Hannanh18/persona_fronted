const logger = require("../lib/logger");
const config = require("../../project.config").mocker

logger.info("Starting Mocker...");
require("../../server/mocker").listen(config.port, () => {
  logger.success(`Mocker is running at http://localhost:${config.port}`);
});
