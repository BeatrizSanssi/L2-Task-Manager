/** 
 * The user class represents a user of the task management system, as either a student or a teacher.
 * It handles the users information, role, password and validation.
 * 
 * @class User
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class User {
  userId: string;
  name: string;
  email: string;
  role: 'Student' | 'Teacher';
  private hashedPassword!: string; // The hashed password marked as 'being set later'


  /**
   * Constructs a new User instance.
   * Automatically generates a unique ID for each user.
   * 
   * @param {string} name - The name of the user.
   * @param {string} email - The email of the user.
   * @param {'Student' | 'Teacher'} role - The role of the user, either 'Student' or 'Teacher'.
   */
  constructor(name: string, email: string, role: 'Student' | 'Teacher') {
    this.userId = uuidv4(); // Generate a random id
    this.name = name;
    this.email = email;
    this.role = role;
  }

   /**
   * Validates that the provided password meets the minimum length requirement.
   * 
   * @param {string} password - The password to validate.
   * @returns {boolean} - True if the password is valid, false otherwise.
   */
  private isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  /**
   * Creates and hashes the users password.
   * 
   * @param {string} password - The user's password to hash.
   * @returns {Promise<void>} - A promise that resolves when the password has been hashed.
   * @throws {Error} - If the password is invalid or hashing fails.
   */
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

   /**
   * Verifies whether the provided password matches the stored hashed password.
   * 
   * @param {string} password - The password to verify.
   * @returns {Promise<boolean>} - A promise that resolves to true if the password matches, false otherwise.
   * @throws {Error} - If the password comparison fails.
   */
  async checkPassword(password: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, this.hashedPassword);
    } catch (error) {
      console.error('Error comparing password:', error);
      return false;
    }
  }

   /**
   * Assigns a role to the user.
   * 
   * @param {'student' | 'teacher'} role - The role to assign to the user.
   */
  assignRole(role: 'Student' | 'Teacher'): void {
    this.role = role;
  }
}
  
