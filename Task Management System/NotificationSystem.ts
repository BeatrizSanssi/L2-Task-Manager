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
    // Check if the message is empty
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty.');
    }

    // Check if the notification type is valid
    if (!Object.keys(messageTypes).includes(type)) {
      throw new Error(`Invalid notification type: ${type}. Please provide a valid notification type.`);
    }

    this.message = message;
    this.type = type;
  }

  sendNotification(notificationDetails: { recipient: string; taskTitle: string; category: string; taskType: string; deadline: Date }): void {
    // Validate the notification details
    if (!notificationDetails.recipient || notificationDetails.recipient.trim().length === 0) {
      throw new Error('Recipient cannot be empty.');
    }

    if (!notificationDetails.taskTitle || notificationDetails.taskTitle.trim().length === 0) {
      throw new Error('Task title cannot be empty.');
    }

    if (!notificationDetails.category || notificationDetails.category.trim().length === 0) {
      throw new Error('Category cannot be empty.');
    }

    if (!notificationDetails.taskType || notificationDetails.taskType.trim().length === 0) {
      throw new Error('Task type cannot be empty.');
    }

    if (!notificationDetails.deadline || isNaN(notificationDetails.deadline.getTime())) {
      throw new Error('Invalid deadline. Please provide a valid date.');
    }

    // Send the notification
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