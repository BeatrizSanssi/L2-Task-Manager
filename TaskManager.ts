/** 
 * This file is responsible for handling the task manager.
 * @class TaskManager
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

import { Task } from './Task';
import { NotificationSystem } from './NotificationSystem';
import { User } from './User';

export class TaskManager {
  tasks: Task[];
  notificationSystem: NotificationSystem;
  user: User;

  addTask(task: Task): void {
    this.tasks.push(task);
    this.user.assignTask(task);
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  updateTask(taskId: string, updatedTask: Task): void {
    this.tasks = this.tasks.map(task => task.id === taskId ? updatedTask : task);
  }

  assignTask(taskId: string, user: User): void {
    const task = this.tasks.find(task => task.id === taskId);
    task.author = user.name;
  }

  addNotification(message: string, type: string): void {
    this.notificationSystem = new NotificationSystem(message, type);
  }

  listTasks(): void {
    this.tasks.forEach(task => console.log(task));
  }
}