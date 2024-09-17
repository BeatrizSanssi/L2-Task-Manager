/** 
 * This file is responsible for handling the notification system.
 * @class NotificationSystem
 * @param {string} message - The message to be displayed
 * @param {string} type - The type of the message
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

const notification = [
  {upCommigTask: 'upCommigTask'},
  {newTask: 'newTask'},
  {taskUpdated: 'taskUpdated'},
  {taskCompleted: 'taskCompleted'},
  {newMessage: 'newMessage'}, 
]

export class NotificationSystem {
  message: string;
  type: string;

  constructor(message: string, type: string) {
    this.message = message;
    this.type = type;
  }
}