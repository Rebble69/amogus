const emitter = require("events");
const events = new emitter.EventEmitter();

module.exports = { events };
/**
 * @description main project-wide event emitter
 */
