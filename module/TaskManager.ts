/**
 * This file is responsible for handling the task manager.
 * @class TaskManager
 * @param {Task[]} tasks - The tasks to be managed
 * @param {NotificationSystem} notificationSystem - The notification system
 * @param {User} teacher - The teacher
 * @param {User} student - The student
 * @param {Category} category - The category
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from './Task'
import { NotificationSystem } from './NotificationSystem'
import { User } from './User'
import { Category } from './Category'

export class TaskManager {
  tasks: Task[]
  notificationSystem!: NotificationSystem // Mark the property as 'being set later'
  teacher!: User // Mark the property as 'being set later'
  student!: User // Mark the property as 'being set later'
  category!: Category // Mark the property as 'being set later'

  private assignedTasks: Task[] = []

  constructor() {
    this.tasks = []
  }

  createTask(task: Task): void {
    let newTask = new Task(
      task.taskId,
      task.category,
      task.type,
      task.author,
      task.title,
      task.description,
      task.deadline,
      task.status,
    )

    // newTask.addTaskId(newTask.taskId)
    // newTask.addCategory(newTask.category)
    // newTask.addType(newTask.type)
    // newTask.addAuthor(newTask.author)
    // newTask.addTitle(newTask.title)
    // newTask.addDescription(newTask.description)
    // newTask.addDeadline(newTask.deadline)
    // newTask.addStatus(newTask.status)

    this.tasks.push(newTask)

    // Notify the student about the new task
    this.notifyStudent(this.student, `New task assigned: ${task.title}`, 'new-task', task)
  }

  // Assign a task to a student
  assignTaskToStudent(task: Task, teacher: User, student: User): void {
    task.author = teacher.name

    if (teacher.role === 'teacher') {
      this.createTask(task)
      this.addStudent(student)
      console.log(`${this.student.name} has been assigned the task: ${task.title}`)
    } else {
      console.log('Only teachers can assign tasks')
    }
  }

  // Add a student to the task
  addStudent(student: User): void {
      this.student = student
    }
  
  // // Get the task as a student
  // getTask(task: Task): void {
  //   if (this.student) {
  //     this.assignedTasks.push(task)

  //     console.log(`${this.student} has received the task: ${task.title}`)
  //   } else {
  //     console.log('Only students can receive tasks')
  //   }
  // }

  // updateType(newType: string): void {
  //   this.type = newType;
  // }

  // updateTitle(newTitle: string): void {
  //   this.title = newTitle;
  // }

  // updateDescription(newDescription: string): void {
  //   this.description = newDescription;
  // }

  // updateDeadline(newDeadline: string): void {
  //   this.deadline = newDeadline;
  // }

  removeTask(taskId: string): void {
    const removedTask = this.tasks.find(task => task.taskId === taskId)
    if (removedTask) {
      // Notify the student about the removed task
      this.notifyStudent(this.student, `Task removed: ${removedTask.title}`, 'task-removed', removedTask)
    }
    this.tasks = this.tasks.filter(task => task.taskId !== taskId)
  }

  updateTask(taskId: string, updatedTask: Task): void {
    this.tasks = this.tasks.map(task => task.taskId === taskId ? updatedTask : task)

    // Notify the student about the updated task
    this.notifyStudent(this.student, `Task updated: ${updatedTask.title}`, 'task-updated', updatedTask)
  }

  // Method to notify the student
  private notifyStudent(student: User, message: string, notificationType: string, task: Task): void {
    const notificationMessages = {
      newTask: 'A new task has been assigned to you.',
      taskUpdated: 'A task you’re working on has been updated.',
      taskCompleted: 'A task you were assigned has been completed.',
      upCommingTask: 'Reminder: You have an upcoming task deadline approaching.',
      newMessage: 'You have received a new message regarding a task.'
    };

    const notificationMessage = notificationMessages[notificationType as keyof typeof notificationMessages]

    // Send the notification using the NotificationSystem
    this.notificationSystem = new NotificationSystem(notificationMessage, notificationType);
    this.notificationSystem.sendNotification({
      recipient: student.name,
      taskTitle: task.title,
      category: task.category,
      type: task.type,
      deadline: task.deadline,
    });
  }

  // Remind the student if the task hasn't been started within a week
  remindTask(task: Task): void {
    const oneWeek = 7 * 24 * 60 * 60 * 1000
    const now = new Date().getTime()
    const taskCreationTime = new Date(task.createdAt).getTime()

    if (!task.hasStarted() && (now - taskCreationTime) > oneWeek) {
      this.notifyStudent(this.student, `Reminder: You haven't started your task ${task.title}`, 'task-reminder', task)
    }
  }

  // Notify if the task is due in two days
  checkDeadlineApproaching(task: Task): void {
    const twoDays = 2 * 24 * 60 * 60 * 1000
    const now = new Date().getTime()
    const deadlineTime = new Date(task.deadline).getTime()

    // If the deadline is within two days, notify the student
    if (deadlineTime - now <= twoDays) {
      this.notifyStudent(this.student, `Deadline approaching for ${task.title}`, 'deadline-approaching', task)
    }
  }
  // assignTask(taskId: string, user: User): void {
  //   const task = this.tasks.find(task => task.id === taskId);
  //   task.author = user.name;
  // }



  listTasks(): void {
    this.tasks.forEach((task) => console.log(task))
  }
}
