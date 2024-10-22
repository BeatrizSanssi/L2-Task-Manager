/**
 * The Grade class handles the grading of a task completed
 * by a student.
 *
 * @class Grade
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
 */

export class Grade {
  name: string

  private static validGrades: string[] = ['A', 'B', 'C', 'D', 'E', 'F']

  /**
   * Constructs a new Grade instance and validates the provided name.
   *
   * @param {string} name - The name of the grade.
   * @throws {Error} - Throws an error if the grade is invalid.
   */
  constructor(name: string) {
    this.name = this.validateGrade(name)
  }

  /**
   * Validates that the provided grade name is not empty and exists in the list
   * of valid grades.
   *
   * @private
   * @param {string} name - The name of the grade to validate.
   * @returns {string} - The validated grade name.
   * @throws {Error} - Throws an error if the grade name is empty or invalid.
   */
  private validateGrade(name: string): string {
    if (!name || name.trim().length === 0) {
      throw new Error('Grade name cannot be empty.')
    }

    // Ensure the grade name is in the list of valid grades
    if (!Grade.validGrades.includes(name)) {
      throw new Error('Invalid grade name.')
    }

    return name
  }

  /**
   * Sets the grade name to a new valid category.
   *
   * @param {string} newName - The new grade name to set.
   * @throws {Error} - Throws an error if the new grade name is invalid.
   */
  public setGradeName(newName: string): void {
    if (!Grade.validGrades.includes(newName)) {
      throw new Error(
        `Invalid grade name: ${newName}. Please choose from the valid grades.`,
      )
    }

    this.name = newName
    console.log(`Grade name updated to: ${this.name}`)
  }

  /**
   * Returns the grade name as a string.
   *
   * @returns {string} - The grade name.
   */
  toString(): string {
    return this.name
  }
}
