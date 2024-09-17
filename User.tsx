/** 
 * This is the User class
 * @class User
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {string} role - The role of the user
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

const user = [
  {teacher: 'teacher'},
  {student: 'student'},
]

export class User {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor(name: string, email: string, password: string, role: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
