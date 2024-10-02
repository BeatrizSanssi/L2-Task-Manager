'use strict'
/**
 * The main entry point of the module with all the exports.
 * @module index
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, '__esModule', { value: true })
exports.NotificationSystem =
  exports.Category =
  exports.User =
  exports.Task =
  exports.TaskManager =
    void 0
var TaskManager_1 = require('./TaskManager')
Object.defineProperty(exports, 'TaskManager', {
  enumerable: true,
  get: function () {
    return TaskManager_1.TaskManager
  },
})
var Task_1 = require('./Task')
Object.defineProperty(exports, 'Task', {
  enumerable: true,
  get: function () {
    return Task_1.Task
  },
})
var User_1 = require('./User')
Object.defineProperty(exports, 'User', {
  enumerable: true,
  get: function () {
    return User_1.User
  },
})
var Category_1 = require('./Category')
Object.defineProperty(exports, 'Category', {
  enumerable: true,
  get: function () {
    return Category_1.Category
  },
})
var NotificationSystem_1 = require('./NotificationSystem')
Object.defineProperty(exports, 'NotificationSystem', {
  enumerable: true,
  get: function () {
    return NotificationSystem_1.NotificationSystem
  },
})
//# sourceMappingURL=index.js.map
