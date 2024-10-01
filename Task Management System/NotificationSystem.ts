/** 
 * This file is responsible for handling the notification system.
 * @class NotificationSystem
 * @param {string} message - The message to be displayed
 * @param {string} type - The type of the message
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

export const messageTypes = {
  upCommingTask: 'Reminder: You have an upcoming task deadline approaching.',
  newTask: 'A new task has been assigned to you.',
  taskUpdated: 'A task you’re working on has been updated.',
  taskDeleted: 'A task you’re working on has been deleted.',
  taskReminder: 'Reminder: You have a task you haven´t started working on.',
  taskCompleted: 'A task you were assigned has been completed.',
  newMessage: 'You have received a new message!'
}

export class NotificationSystem {
  message: string;
  type: keyof typeof messageTypes;

  constructor(message: string, type: keyof typeof messageTypes) {
    this.message = message;
    this.type = type;
  }

  sendNotification(notificationDetails: { recipient: string; taskTitle: string; category: string; taskType: string; deadline: Date }): void {
    console.log(`Notification sent to ${notificationDetails.recipient}:`)
    console.log(`Task: ${notificationDetails.taskTitle}`)
    console.log(`Category: ${notificationDetails.category}`)
    console.log(`Type: ${notificationDetails.taskType}`)
    console.log(`Deadline: ${notificationDetails.deadline.toISOString()}`) 
    console.log(`Message: ${this.message}`)
  }

  toString(): string {
    return this.type;
  }
}