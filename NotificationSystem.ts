/** 
 * This file is responsible for handling the notification system.
 * @class NotificationSystem
 * @param {string} message - The message to be displayed
 * @param {string} notificationType - The type of the message
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

const notificationType = [
  {upCommingTask: 'upComming Task'},
  {newTask: 'new Task'},
  {taskUpdated: 'task Updated'},
  {taskCompleted: 'task Completed'},
  {newMessage: 'new Message'}, 
]

export class NotificationSystem {
  message: string;
  notificationType: string;

  constructor(message: string, notificationType: string) {
    this.message = message;
    this.notificationType = notificationType;
  }
}