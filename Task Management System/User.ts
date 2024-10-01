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

   // Validate password (at least 8 characters)
  private isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  // Create a new password for the user
  async createPassword(password: string): Promise<void> {
    if (!this.isValidPassword(password)) {
      throw new Error('Password must be at least 8 characters long.');
    }

    // Hash the password
    try {
      const saltRounds = 10;
      this.hashedPassword = await bcrypt.hash(password, saltRounds);
      this.assignRole(this.role);
      console.log(`User ${this.name} with role ${this.role} has been created with a hashed password.`);
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('Error creating user.');
    }
  }

  // Verify the password of the user
  async checkPassword(password: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, this.hashedPassword);
    } catch (error) {
      console.error('Error comparing password:', error);
      return false;
    }
  }

  // Assign a role to the user
  assignRole(role: 'student' | 'teacher'): void {
    this.role = role;
  }
}
  
