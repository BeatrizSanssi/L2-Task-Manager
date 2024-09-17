/** 
 * This file contains the User class.
 * @class User
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {string} user - The role of the user
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

import { Task } from "./Task";

export class User {
  name: string;
  email: string;
  user: 'student' | 'teacher';

  constructor(name: string, email: string, user: string) {
    this.name = name;
    this.email = email;
    this.user = user as 'student' | 'teacher';
  }

  assignTask(task: Task): void {
    task.author = this.name;
  }
}
