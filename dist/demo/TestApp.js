'use strict'
/**
 * This file demonstrates how to use the Task Management System.
 * @class TestApp
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const Task_1 = require('../src/Task')
const NotificationSystem_1 = require('../src/NotificationSystem')
const User_1 = require('../src/User')
const Category_1 = require('../src/Category')
const TaskManager_1 = require('../src/TaskManager')
// Create a new user
const user = new User_1.User(
  'Paul Hanson',
  'paul.hanson1@student.lnu.se',
  'Student',
)
console.log('User created:', user)
// Create a password for the user
function setupUserPassword() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield user.createPassword('mySecurePassword')
      console.log('Password has been set for:', user.name)
      // Check if the password is correct
      const isPasswordCorrect = yield user.checkPassword('mySecurePassword')
      console.log('Is the password correct?', isPasswordCorrect)
      // Test with incorrect password
      const isPasswordIncorrect = yield user.checkPassword('wrongPassword')
      console.log('Is the wrong password correct?', isPasswordIncorrect)
    } catch (error) {
      console.error('Error setting password:', error)
    }
  })
}
setupUserPassword()
// Create a notification system
const notificationSystem = new NotificationSystem_1.NotificationSystem(
  'newTask',
)
console.log('Notification system created:', notificationSystem)
// Create a category
try {
  const category = new Category_1.Category('Math')
  console.log(category.toString())
  // Try to change the category to another
  category.setCategoryName('Science')
  console.log('Category updated to:', category.toString())
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  } else {
    console.error('An unknown error occurred')
  }
}
// Create tasks
const task1 = new Task_1.Task(
  '1',
  'English',
  'Assignment',
  'Maria Johnson',
  'Essay',
  'Write an essay about "Lord of the Flies". The essay must have a minimum of 500 words.',
  new Date('Deadline: 2024-12-01'),
  'Not started',
  new Date('Created at 2024-09-30'),
)
console.log('Task created:', task1)
// Create a task manager
const taskManager = new TaskManager_1.TaskManager()
taskManager.assignTaskToStudent(
  task1,
  new User_1.User('Maria Johnson', 'maria.Johnson@lnu.com', 'Teacher'),
  user,
)
console.log('Task assigned to student:', user.name)
// Add task to the task manager
taskManager.notifyStudent(user, 'newTask', task1)
taskManager.listTasks()
//# sourceMappingURL=TestApp.js.map
