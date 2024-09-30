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

import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class User {
  userId: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  private hashedPassword!: string; // The hashed password marked as 'being set later'

  constructor(name: string, email: string, role: 'student' | 'teacher') {
    this.userId = uuidv4(); // Generate a random id
    this.name = name;
    this.email = email;
    this.role = role;
  }

  // Create a new user
  async createUser(password: string): Promise<void> {
  // async createUser(name: string, email: string, password: string, role: 'student' | 'teacher'): Promise<void> {
  //   this.userId = uuidv4();
  //   this.name = name;
  //   this.email = email;
  //   this.role = role;

    // Hash the password
    const saltRounds = 10;
    this.hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`User ${this.name} created with hashed password.`);
  }

  // Verify the password of the user
  async checkPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.hashedPassword);
  }

  // Assign a role to the user
  assignRole(role: 'student' | 'teacher'): void {
    // this.userId = userId;
    this.role = role;
  }
}
  
