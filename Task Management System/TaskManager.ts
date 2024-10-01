/**
 * The Task Manager handles the creation and handling of tasks. It also handles notification
 * for both teachers and students. 
 * 
 * @class TaskManager
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from './Task'
import { NotificationSystem, messageTypes } from './NotificationSystem'
import { User } from './User'
import { Category } from './Category'

export class TaskManager {
  tasks: Task[]
  notificationSystem!: NotificationSystem // Mark the property as 'being set later'
  teacher!: User // Mark the property as 'being set later'
  student!: User // Mark the property as 'being set later'
  category!: Category // Mark the property as 'being set later'

  private assignedTasks: Task[] = []

  /**
   * The constructor initializes the TaskManager with an empty list of tasks.
   * This is where all tasks assigned to students will be stored.
   */
  constructor() {
    this.tasks = []
  }

  /**
   * Creates a new task for the student. 
   * Only teachers are allowed to create tasks.
   * 
   * @param {Task} task - The task to be created.
   * @throws Will throw an error if no student or teacher is set, or if a task with the same ID already exists.
   */
  createTask(task: Task): void {
    if (!this.student || !this.teacher) {
      throw new Error("Student or teacher must be set before creating a task.");
    }

    if (this.teacher.role !== 'teacher') {
      throw new Error("Only teachers can create tasks.");
    }

    console.log("Creating task for student:", this.student);
    // let newTask = new Task(
    //   task.taskId,
    //   task.category,
    //   task.taskType,
    //   task.author,
    //   task.title,
    //   task.description,
    //   task.deadline,
    //   task.status,
    //   task.createdAt
    // )

    // Check if the task already exists, if so throw an error
    if (this.tasks.find(t => t.taskId === task.taskId)) {
      throw new Error(`A task with the ID ${task.taskId} already exists.`);
    }

    // Add the task to the list of tasks
    this.tasks.push(task)

    // Notify the student about the new task
    this.notifyStudent(this.student, `New task assigned: ${task.title}`, 'newTask', task)
  }

  /**
   * This method assigns a task to a student, but only if the assigner is a teacher.
   * It also adds the teachers name as the author of the task.
   * 
   * @param {Task} task - The task to assign to the student.
   * @param {User} teacher - The teacher assigning the task.
   * @param {User} student - The student to whom the task is assigned.
   * @throws Will throw an error if the user assigning the task is not a teacher.
   */
  assignTaskToStudent(task: Task, teacher: User, student: User): void {
    if (teacher.role !== 'teacher') {
      throw new Error('Only teachers can assign tasks.');
    }
    this.teacher = teacher; 
    task.author = teacher.name;
    this.addStudent(student);
    this.createTask(task)
    console.log(`${this.student.name} has been assigned the task: ${task.title}`);
  }

  /**
   * Adds a student to the task manager.
   * Ensures the student object is valid and contains a name.
   * 
   * @param {User} student - The student to be added.
   */
  addStudent(student: User): void {
    if (student && student.name) {
      this.student = student;
    } else {
        console.error('No student object provided');
    }
  }

  /**
   * Removes a task from the task manager by its ID.
   * Notifies the student if the task is successfully removed.
   * 
   * @param {string} taskId - The ID of the task to remove.
   * @throws Will throw an error if the task with the given ID is not found.
   */  
  removeTask(taskId: string): void {
    const removedTask = this.tasks.find(task => task.taskId === taskId)
    if (!removedTask) {
      throw new Error(`Task with ID ${taskId} not found.`);
    }
    else if (removedTask) {
      this.notifyStudent(this.student, `Task removed: ${removedTask.title}`, 'taskDeleted', removedTask)
    }
    this.tasks = this.tasks.filter(task => task.taskId !== taskId)
  }

  /**
  * Updates a task from the task manager by its ID.
  * Notifies the student if the task is successfully updated.
  * 
  * @param {string} taskId - The ID of the task to remove.
  * @param {Task} updatedTask - The updated task object.
  * @throws Will throw an error if the task with the given ID is not found.
  */ 
  updateTask(taskId: string, updatedTask: Task): void {
    this.tasks = this.tasks.map(task => task.taskId === taskId ? updatedTask : task)

    if (!this.tasks.find(task => task.taskId === taskId)) {
      throw new Error(`Task with ID ${taskId} not found.`);
    }

    this.notifyStudent(this.student, `Task updated: ${updatedTask.title}`, 'taskUpdated', updatedTask)
  }

  /**
   * Sends a notification to the student regarding a task.
   * Ensures the student and task information is valid.
   * If the notification type is not found, it logs an error message.
   * 
   * @param {User} student - The student to notify.
   * @param {string} message - The message to send.
   * @param {keyof typeof messageTypes} notificationType - The type of notification.
   * @param {Task} task - The task associated with the notification.
   */
  notifyStudent(student: User, message: string, notificationType: keyof typeof messageTypes, task: Task): void {
    if (!student || !student.name) {
      console.error('Invalid student object or student name is missing', student);
      return;
    }

    const notificationMessage = messageTypes[notificationType];

    // Check if the notification message is undefined
    if (!notificationMessage) {
      console.error(`Notification message for type ${notificationType} is undefined`);
    }

    // Send the notification using the NotificationSystem
    this.notificationSystem = new NotificationSystem(notificationMessage, notificationType);
    this.notificationSystem.sendNotification({
      recipient: student.name,
      taskTitle: task.title,
      category: task.category,
      taskType: task.taskType,
      deadline: task.deadline,
    });
  }

   /**
   * Sends a remainder notification to the stundent if the student hasn't started
   * working on the assignment wihin a week.
   * 
   * @param {Task} task - The task associated with the notification.
   */
  remindTask(task: Task): void {
    const oneWeek = 7 * 24 * 60 * 60 * 1000
    const now = new Date().getTime()
    const taskCreationTime = new Date(task.createdAt).getTime()

    if (!task.hasStarted() && (now - taskCreationTime) > oneWeek) {
      this.notifyStudent(this.student, `Reminder: You haven't started your task ${task.title}`, 'taskReminder', task)
    }
  }

   /**
   * Sends a remainder notification to the stundent if the deadline is approaching within two days.
   * 
   * @param {Task} task - The task associated with the notification.
   */  
  checkDeadlineApproaching(task: Task): void {
    const twoDays = 2 * 24 * 60 * 60 * 1000
    const now = new Date().getTime()
    const deadlineTime = new Date(task.deadline).getTime()

    // If the deadline is within two days, notify the student
    if (deadlineTime - now <= twoDays) {
      this.notifyStudent(this.student, `Deadline approaching for ${task.title}`, 'upCommingTask', task)
    }
  }

  /**
   * Logs all tasks in the task manager to the console.
   * If no tasks exist, logs a message indicating that there are no tasks.
   */
  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log('No tasks available.');
      return;
    }

    this.tasks.forEach(task => {
      console.log(task.toString());
    });
  }
}
