"use strict";
/**
 * The Category class handles the validation and setting of categories.
 * It ensures that only valid categories can be assigned.
 *
 * @class Category
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    /**
     * Constructs a new Category instance and validates the provided name.
     *
     * @param {string} name - The name of the category.
     * @throws {Error} - Throws an error if the category name is invalid.
     */
    constructor(name) {
        this.name = this.validateCategoryName(name);
    }
    /**
     * Validates that the provided category name is not empty and exists in the list
     * of valid categories.
     *
     * @param {string} name - The name of the category to validate.
     * @returns {string} - The validated category name.
     * @throws {Error} - Throws an error if the category name is empty or invalid.
     */
    validateCategoryName(name) {
        if (!name || name.trim().length === 0) {
            throw new Error('Category name cannot be empty.');
        }
        // Ensure the category name is in the list of valid categories
        if (!Category.validCategories.includes(name)) {
            throw new Error('Invalid category name.');
        }
        return name;
    }
    /**
     * Sets the category name to a new valid category.
     *
     * @param {string} newName - The new category name to set.
     * @throws {Error} - Throws an error if the new category name is invalid.
     */
    setCategoryName(newName) {
        if (!Category.validCategories.includes(newName)) {
            throw new Error(`Invalid category name: ${newName}. Please choose from the valid categories.`);
        }
        this.name = newName;
        console.log(`Category name updated to: ${this.name}`);
    }
    /**
     * Returns the category name as a string.
     *
     * @returns {string} - The category name.
     */
    toString() {
        return this.name;
    }
}
exports.Category = Category;
Category.validCategories = [
    'Math',
    'Science',
    'English',
    'History',
    'Geography',
    'Art',
    'Music',
    'Physical Education',
    'Technology',
    'Religion',
    'Social Studies',
];
//# sourceMappingURL=Category.js.map