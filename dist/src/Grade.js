"use strict";
/**
 * The Grade class handles the grading of a task completed
 * by a student.
 *
 * @class Grade
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = void 0;
class Grade {
    /**
     * Constructs a new Grade instance and validates the provided value.
     *
     * @param {string} value - The value of the grade.
     * @throws {Error} - Throws an error if the grade is invalid.
     */
    constructor(value) {
        this.value = this.validateGrade(value);
    }
    /**
     * Validates that the provided grade value is not empty and exists in the list
     * of valid grades.
     *
     * @private
     * @param {string} value - The value of the grade to validate.
     * @returns {string} - The validated grade value.
     * @throws {Error} - Throws an error if the grade value is empty or invalid.
     */
    validateGrade(value) {
        if (!value || value.trim().length === 0) {
            throw new Error('Grade value cannot be empty.');
        }
        // Ensure the grade value is in the list of valid grades
        if (!Grade.validGrades.includes(value)) {
            throw new Error('Invalid grade value.');
        }
        return value;
    }
    /**
     * Sets the grade value to a new valid grade.
     *
     * @param {string} newValue - The new grade value to set.
     * @throws {Error} - Throws an error if the new grade value is invalid.
     */
    setGradeValue(newValue) {
        if (!Grade.validGrades.includes(newValue)) {
            throw new Error(`Invalid grade value: ${newValue}. Please choose from the valid grades.`);
        }
        this.value = newValue;
        console.log(`Grade value updated to: ${this.value}`);
    }
    /**
     * Returns the grade value as a string.
     *
     * @returns {string} - The grade value.
     */
    toString() {
        return this.value;
    }
}
exports.Grade = Grade;
Grade.validGrades = ['A', 'B', 'C', 'D', 'E', 'F'];
//# sourceMappingURL=Grade.js.map