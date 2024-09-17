// /** 
//  * This is a test file
//  * @class TestApp
//  * @version 1.0.0
//  * @author Beatriz Sanssi <bs222eh@student.lnu.se>
// */

// import { Task } from '../Task';
// import { NotificationSystem } from '../NotificationSystem';
// import { User } from '../User';
// import { Category } from '../Category';
// import { TaskManager } from '../TaskManager';

// const notificationSystem = new NotificationSystem('New task', 'Assignment');
// const user = new User('student', 'Paul', 'paul@student.lnu.se');
// const category = new Category('English', 'Write an essay about "Lord of the Flies". The essay must have a minimum of 500 words.');
// const taskManager = new TaskManager();

// // Create tasks
// const task1 = new Task('1', 'student', 'Assignment', 'Math', 'not started', '2024-10-01');
// const task2 = new Task('2', 'student', 'Assignment', 'English', 'not started', '2024-10-01');

// // Add tasks to the task manager
// taskManager.addTask(task1);
// taskManager.addNotification('New task added', 'newTask');

// // Assign task to user
// user.assignTask(task1);
// user.assignTask(task2);

// console.log(task1);
// console.log(taskManager.listTasks());