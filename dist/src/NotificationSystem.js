'use strict'
/**
 * This file is responsible for handling the notification system.
 * It manages notification types and sends notifications with specific details.
 *
 * @class NotificationSystem
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, '__esModule', { value: true })
exports.NotificationSystem = void 0
class NotificationSystem {
  /**
   * Initializes a new notification instance.
   *
   * @param {string} type - The type of notification to be sent.
   * @throws {Error} - If the message is empty or if the notification type is invalid.
   */
  constructor(type) {
    this.type = type
    this.message = this.getMessage(type)
  }
  /**
   * Returns the message associated with the notification type.
   *
   * @param {string} type - The type of notification.
   * @returns {string} - The message associated with the notification type.
   * @throws {Error} - If the notification type is invalid.
   * @private
   */
  getMessage(type) {
    switch (type) {
      case 'upComingTask':
        return 'Reminder: You have an upcoming task deadline approaching.'
      case 'newTask':
        return 'A new task has been assigned to you.'
      case 'taskUpdated':
        return 'A task you’re working on has been updated.'
      case 'taskDeleted':
        return 'A task you’re working on has been deleted.'
      case 'taskReminder':
        return 'Reminder: You have a task you haven’t started working on.'
      case 'taskCompleted':
        return 'A task you were assigned has been completed.'
      case 'newMessage':
        return 'You have received a new message!'
      default:
        throw new Error(`Invalid notification type: ${type}.`)
    }
  }
  /**
   * Updates the notification type and corresponding message.
   *
   * @param {string} type - The new notification type.
   */
  setNotificationType(type) {
    this.type = type
    this.message = this.getMessage(type)
  }
  /**
   * Sends a notification to a recipient with task details.
   *
   * @param {object} notificationDetails - An object containing task-specific details.
   * @param {string} notificationDetails.recipient - The recipient of the notification.
   * @param {string} notificationDetails.taskTitle - The title of the task.
   * @param {string} notificationDetails.category - The category of the task.
   * @param {string} notificationDetails.taskType - The type of the task.
   * @param {Date} notificationDetails.deadline - The deadline for the task.
   * @throws {Error} - If any of the provided details are invalid.
   */
  sendNotification(notificationDetails) {
    // Validate the notification details
    if (
      !notificationDetails.recipient ||
      notificationDetails.recipient.trim().length === 0
    ) {
      throw new Error('Recipient cannot be empty.')
    }
    if (
      !notificationDetails.taskTitle ||
      notificationDetails.taskTitle.trim().length === 0
    ) {
      throw new Error('Task title cannot be empty.')
    }
    if (
      !notificationDetails.category ||
      notificationDetails.category.trim().length === 0
    ) {
      throw new Error('Category cannot be empty.')
    }
    if (
      !notificationDetails.taskType ||
      notificationDetails.taskType.trim().length === 0
    ) {
      throw new Error('Task type cannot be empty.')
    }
    if (
      !notificationDetails.deadline ||
      isNaN(notificationDetails.deadline.getTime())
    ) {
      throw new Error('Invalid deadline. Please provide a valid date.')
    }
    // Send the notification
    console.log(`Notification sent to ${notificationDetails.recipient}:`)
    console.log(`Task: ${notificationDetails.taskTitle}`)
    console.log(`Category: ${notificationDetails.category}`)
    console.log(`Type: ${notificationDetails.taskType}`)
    console.log(`Deadline: ${notificationDetails.deadline.toISOString()}`)
    console.log(`Message: ${this.message}`)
  }
  /**
   * Returns the type of the notification as a string.
   *
   * @returns {string} - The type of the notification.
   */
  toString() {
    return this.type
  }
}
exports.NotificationSystem = NotificationSystem
//# sourceMappingURL=NotificationSystem.js.map
