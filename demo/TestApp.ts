/**
 * This file demonstrates how to use the Task Management System.
 * @class TestApp
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from '../src/Task'
import { NotificationSystem } from '../src/NotificationSystem'
import { User } from '../src/User'
import { Category } from '../src/Category'
import { TaskManager } from '../src/TaskManager'

// Create a new user
const user = new User('Paul Hanson', 'paul.hanson1@student.lnu.se', 'Student')
console.log('User created:', user)

// Create a password for the user
async function setupUserPassword() {
  try {
    await user.createPassword('mySecurePassword')
    console.log('Password has been set for:', user.name)

    // Check if the password is correct
    const isPasswordCorrect = await user.checkPassword('mySecurePassword')
    console.log('Is the password correct?', isPasswordCorrect)

    // Test with incorrect password
    const isPasswordIncorrect = await user.checkPassword('wrongPassword')
    console.log('Is the wrong password correct?', isPasswordIncorrect)
  } catch (error) {
    console.error('Error setting password:', error)
  }
}

setupUserPassword()

// Create a notification system
const notificationSystem = new NotificationSystem('newTask')
console.log('Notification system created:', notificationSystem)

// Create a category
try {
  const category = new Category('Math')
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
const task1 = new Task(
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
const taskManager = new TaskManager()
taskManager.assignTaskToStudent(
  task1,
  new User('Maria Johnson', 'maria.Johnson@lnu.com', 'Teacher'),
  user,
)
console.log('Task assigned to student:', user.name)

// Add task to the task manager
taskManager.notifyStudent(user, 'newTask', task1)
taskManager.listTasks()
