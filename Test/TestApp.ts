/**
 * This is a test file
 * @class TestApp
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from '../Task Management System/Task'
import { NotificationSystem } from '../Task Management System/NotificationSystem'
import { User } from '../Task Management System/User'
import { Category } from '../Task Management System/Category'
import { TaskManager } from '../Task Management System/TaskManager'

// Create a new user
const user = new User('Paul', 'paul@student.lnu.se', 'student')
console.log('User created:', user)

// Create a notification system
const notificationSystem = new NotificationSystem('New task', 'Assignment')
console.log('Notification system created:', notificationSystem)

// Create a category
const category = new Category('Math')
// const category = new Category('English', 'Write an essay about "Lord of the Flies". The essay must have a minimum of 500 words.');
console.log('Category created:', category)

// Create tasks
const task1 = new Task(
  '1',
  'English',
  'Assignment',
  'Maria Johnson',
  'Essay',
  'Write an essay about "Lord of the Flies". The essay must have a minimum of 500 words.',
  new Date('Deadline: 2024-10-01'),
  'not started',
  new Date('Created at 2024-09-01'),
)

console.log('Task created:', task1)

const task2 = new Task(
  '2',
  'Biology',
  'Test',
  'John Doe',
  'Test 1',
  'Test about the human body',
  new Date('Deadline: 2024-10-08'),
  'not started',
  new Date('Created at 2024-09-03'),
)
console.log('Task created:', task2)

// Create a task manager
const taskManager = new TaskManager()
taskManager.assignTaskToStudent(
  task1,
  new User('Maria Johnson', 'maria.Johnson@lnu.com', 'teacher'),
  user,
)
console.log('Task assigned to student:', user.name)
// console.log('Task manager created:', taskManager);

// Add tasks to the task manager
taskManager.createTask(task1)
taskManager.addNotification('New task added', 'newTask')

// // Assign task to user
// user.assignTask(task1);
// user.assignTask(task2);

console.log(taskManager.listTasks())
