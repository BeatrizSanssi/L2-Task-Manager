"use strict";
/**
 * This is a test file for the User class
 * @test UserTest
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
const User_1 = require("../src/User");
describe('User', () => {
    let user;
    beforeEach(() => {
        user = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
    });
    it('should generate an id when creating a new user', () => {
        expect(user.userId).toBeDefined();
        console.log('User id generated!', user.userId);
    });
    it('should set a new password', () => __awaiter(void 0, void 0, void 0, function* () {
        yield user.setPassword('setMyPassword');
        // Check if the password is correct
        const isPasswordCorrect = yield user.checkPassword('setMyPassword');
        expect(isPasswordCorrect).toBe(true);
        // If the password is incorrect
        const isPasswordIncorrect = yield user.checkPassword('wrongPassword');
        expect(isPasswordIncorrect).toBe(false);
        console.log('The password is hashed correctly for', user.first_name + ' ' + user.last_name);
    }));
    it('should throw an error if the password is less than 8 characters', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(user.setPassword('short')).rejects.toThrow('Password must be at least 8 characters long.');
        console.log('Password validation works correctly!');
    }));
    it('should assign a role to the user', () => {
        user.assignRole('Student');
        expect(user.role).toBe('Student');
        console.log('User role assigned!', user.role);
    });
});
//# sourceMappingURL=User.test.js.map