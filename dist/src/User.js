"use strict";
/**
 * The user class represents a user of the task management system, as either a student or a teacher.
 * It handles the users information, role, password and validation.
 *
 * @class User
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bcrypt = __importStar(require("bcrypt"));
const uuid_1 = require("uuid");
class User {
    /**
     * Constructs a new User instance.
     * Automatically generates a unique ID for each user.
     *
     * @param {string} name - The name of the user.
     * @param {string} email - The email of the user.
     * @param {'Student' | 'Teacher'} role - The role of the user, either 'Student' or 'Teacher'.
     */
    constructor(name, email, role) {
        this.userId = (0, uuid_1.v4)(); // Generate a random id
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
    isValidPassword(password) {
        return password.length >= 8;
    }
    /**
     * Creates and hashes the users password.
     *
     * @param {string} password - The user's password to hash.
     * @returns {Promise<void>} - A promise that resolves when the password has been hashed.
     * @throws {Error} - If the password is invalid or hashing fails.
     */
    createPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidPassword(password)) {
                throw new Error('Password must be at least 8 characters long.');
            }
            // Hash the password
            try {
                const saltRounds = 10;
                this.hashedPassword = yield bcrypt.hash(password, saltRounds);
                this.assignRole(this.role);
                console.log(`User ${this.name} with role ${this.role} has been created with a hashed password.`);
            }
            catch (error) {
                console.error('Error hashing password:', error);
                throw new Error('Error creating user.');
            }
        });
    }
    /**
     * Verifies whether the provided password matches the stored hashed password.
     *
     * @param {string} password - The password to verify.
     * @returns {Promise<boolean>} - A promise that resolves to true if the password matches, false otherwise.
     * @throws {Error} - If the password comparison fails.
     */
    checkPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bcrypt.compare(password, this.hashedPassword);
            }
            catch (error) {
                console.error('Error comparing password:', error);
                return false;
            }
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