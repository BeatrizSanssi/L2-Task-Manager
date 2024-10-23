"use strict";
/**
 * The user class represents a user of the task management system, as either a student or a teacher.
 * It handles the users information, role, password and validation.
 *
 * @class User
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    /**
     * Constructs a new User instance.
     * Automatically generates a unique ID for each user.
     *
     * @param {string} first_name - The first name of the user.
     * @param {string} last_name - The last name of the user.
     * @param {string} email - The email of the user.
     * @param {'Student' | 'Teacher'} role - The role of the user, either 'Student' or 'Teacher'.
     */
    constructor(userId, first_name, last_name, email, role) {
        this.userId = userId;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
    }
    /**
     * Validates that the provided password meets the minimum length requirement.
     *
     * @param {string} password - The password to validate.
     * @returns {boolean} - True if the password is valid, false otherwise.
     */
    isValidPassword(password) {
        return password.length >= 8;
    }
    /**
     * Sets the users password.
     *
     * @param {string} password - The user's password to store.
     * @throws {Error} - If the password is invalid.
     */
    setPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidPassword(password)) {
                throw new Error('Password must be at least 8 characters long.');
            }
            this.password = password;
            this.assignRole(this.role);
            console.log(`User ${this.first_name} ${this.last_name} with role ${this.role} has been created.`);
        });
    }
    /**
     * Verifies whether the provided password matches the stored password.
     *
     * @param {string} password - The password to verify.
     * @returns {Promise<boolean>} - Returns true if the password matches, false otherwise.
     * @throws {Error} - If the password comparison fails.
     */
    checkPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.password === password;
        });
    }
    /**
     * Assigns a role to the user.
     *
     * @param {'student' | 'teacher'} role - The role to assign to the user.
     */
    assignRole(role) {
        this.role = role;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map