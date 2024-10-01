/** 
 * This file is responsible for handling the category.
 * @class Category
 * @param {string} name - The name of the category
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
*/

export class Category {
  name: string;

  private static validCategories: string[] = [
    'Math', 'Science', 'English', 'History', 
    'Geography', 'Art', 'Music', 'Physical Education', 
    'Technology', 'Religion', 'Social Studies'];

  constructor(name: string) {
    this.name = this.validateCategoryName(name);
  }

  // Validate the category name
  private validateCategoryName(name: string): string {
    if (!name || name.trim().length === 0) {
      throw new Error('Category name cannot be empty.');
    }

    // Check if the category name is in the valid categories
    if (!Category.validCategories.includes(name)) {
      throw new Error('Invalid category name.');
    }

    return name;
  }

  // Method for setting a category
  public setCategoryName(newName: string): void {
    if (!Category.validCategories.includes(newName)) {
      throw new Error(`Invalid category name: ${newName}. Please choose from the valid categories.`);
    }

    this.name = newName;
    console.log(`Category name updated to: ${this.name}`);
  }

  toString(): string {
    return this.name;
  }
}