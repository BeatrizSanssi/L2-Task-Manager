/**
 * This class represents a Task with various fields like ID, category, author,
 * title, description, deadline, and status. It handles validation and management
 * of these fields to ensure task consistency.
 *
 * @class Task
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

export class Task {
  taskId!: string
  category!: string
  taskType!: 'Assignment' | 'Test' | 'Project' | 'Group project'
  author!: string
  title!: string
  description!: string
  deadline!: Date
  status!: 'Not started' | 'In progress' | 'Completed'
  createdAt: Date
  grade!: string

  private static validTaskTypes = [
    'Assignment',
    'Test',
    'Project',
    'Group project',
  ]
  private static validStatuses = ['Not started', 'In progress', 'Completed']

  /**
   * The constructor initializes a new task and validates its fields.
   * @param {string} taskId - The unique ID of the task.
   * @param {string} category - The category the task belongs to.
   * @param {string} taskType - The type of task (must be one of the valid task types).
   * @param {string} author - The author who created the task.
   * @param {string} title - The title of the task.
   * @param {string} description - A brief description of the task.
   * @param {Date} deadline - The deadline by which the task should be completed.
   * @param {string} status - The current status of the task (must be one of the valid statuses).
   * @param {Date} createdAt - The date when the task was created.
   * @param {string} grade - The grade of the task.
   */
  constructor(
    taskId: string,
    category: string,
    taskType: string,
    author: string,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    createdAt: Date,
    grade: string,
  ) {
    this.addTaskId(taskId)
    this.addCategory(category)
    this.addType(
      taskType as 'Assignment' | 'Test' | 'Project' | 'Group project',
    )
    this.addAuthor(author)
    this.addTitle(title)
    this.addDescription(description)
    this.addDeadline(deadline)
    this.addStatus(status as 'Not started' | 'In progress' | 'Completed')
    this.addGrade(grade)

    this.createdAt = createdAt
  }

  /**
   * Ensures that the given value is not empty.
   * This is used to validate required fields such as task ID, category, title, etc.
   *
   * @param {string} value - The value to check.
   * @param {string} fieldName - The name of the field being validated (for error messages).
   * @throws {Error} - Throws an error if the value is empty.
   */
  private validateNotEmpty(value: string, fieldName: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error(`${fieldName} cannot be empty.`)
    }
  }

  /**
   * Validates that the provided task type is one of the allowed types.
   *
   * @param {string} taskType - The task type to check.
   * @throws {Error} Will throw an error if the task type is not valid.
   */
  private validateTaskType(taskType: string): void {
    if (!Task.validTaskTypes.includes(taskType)) {
      throw new Error(
        `Invalid task type: ${taskType}. Valid task types are: ${Task.validTaskTypes.join(', ')}`,
      )
    }
  }

  /**
   * Validates that the task status is one of the allowed statuses.
   *
   * @param {string} status - The status to validate.
   * @throws {Error} Will throw an error if the status is not valid.
   */
  private validateStatus(status: string): void {
    if (!Task.validStatuses.includes(status)) {
      throw new Error(
        `Invalid status: ${status}. Valid statuses are: ${Task.validStatuses.join(', ')}`,
      )
    }
  }

  /**
   * Validates that the provided deadline is a valid date object.
   *
   * @param {Date} deadline - The deadline to validate.
   * @throws {Error} Will throw an error if the deadline is not a valid date.
   */
  private validateDeadline(deadline: Date): void {
    if (!(deadline instanceof Date) || isNaN(deadline.getTime())) {
      throw new Error('Invalid deadline. Please provide a valid date.')
    }
  }

  /**
   * Determines whether the task has been started by the student.
   * Returns true if the status is 'In progress' or 'Completed'.
   *
   * @returns {boolean} - True if the student has started the task, false otherwise.
   */
  public hasStarted(): boolean {
    return this.status === 'In progress' || this.status === 'Completed'
  }

  /**
   * Determines whether the task has been completed.
   *
   * @returns {boolean} - True if the student has completed the task, false otherwise.
   */
  public hasCompleted(): boolean {
    if (this.status !== 'Completed') {
      this.markAsCompleted()
    }
    return this.status === 'Completed'
  }

  /**
   * Determines whether the task is currently in progress.
   *
   * @returns {boolean} - True if the student is currently working on the task, false otherwise.
   */
  public inProgress(): boolean {
    if (this.status !== 'In progress') {
      this.markAsInProgress()
    }
    return this.status === 'In progress'
  }

  /**
   * Determines whether the task has not been started.
   *
   * @returns {boolean} - True if the student has not started the task, false otherwise.
   */
  public notStarted(): boolean {
    if (this.status !== 'Not started') {
      this.markAsNotStarted()
    }
    return this.status === 'Not started'
  }

  /**
   * Marks the task as completed by updating the status.
   */
  private markAsCompleted(): void {
    this.status = 'Completed'
  }

  /**
   * Marks the task as in progress by updating the status.
   */
  private markAsInProgress(): void {
    this.status = 'In progress'
  }

  /**
   * Marks the task as not started by updating the status.
   */
  private markAsNotStarted(): void {
    this.status = 'Not started'
  }

  /**
   * Adds a task ID to the task after ensuring it is not empty.
   *
   * @param {string} taskId - The unique task ID to add.
   */
  private addTaskId(taskId: string): void {
    this.validateNotEmpty(taskId, 'Task ID')
    this.taskId = taskId
  }

  /**
   * Adds a category to the task after validating it is not empty.
   *
   * @param {string} category - The category to add to the task.
   */
  private addCategory(category: string): void {
    this.validateNotEmpty(category, 'Category')
    this.category = category
  }

  /**
   * Adds a task type to the task after validating it is not empty.
   *
   * @param {string} taskType - The task type to add to the task.
   */
  private addType(
    taskType: 'Assignment' | 'Test' | 'Project' | 'Group project',
  ): void {
    this.validateTaskType(taskType)
    this.taskType = taskType
  }

  /**
   * Adds an author to the task after validating it is not empty.
   *
   * @param {string} author - The author to add to the task.
   */
  private addAuthor(author: string): void {
    this.validateNotEmpty(author, 'Author')
    this.author = author
  }

  /**
   * Adds a title to the task after validating it is not empty.
   *
   * @param {string} title - The title to add to the task.
   */
  private addTitle(title: string): void {
    this.validateNotEmpty(title, 'Title')
    this.title = title
  }

  /**
   * Adds a description to the task after validating it is not empty.
   *
   * @param {string} description - The description to add to the task.
   */
  private addDescription(description: string): void {
    this.validateNotEmpty(description, 'Description')
    this.description = description
  }

  /**
   * Adds a deadline to the task after validating it is not empty or undefined.
   *
   * @param {Date} deadline - The deadline to add to the task.
   */
  private addDeadline(deadline: Date): void {
    this.validateDeadline(deadline)
    this.deadline = deadline
  }

  /**
   * Adds a grade to the task after validating it is not empty.
   *
   * @param {Grade} grade - The grade to add to the task.
   */
  private addGrade(grade: string): void {
    this.grade = grade
  }

  /**
   * Adds a status to the task after validating it is not empty.
   *
   * @param {string} status - The status to add to the task.
   */
  private addStatus(status: 'Not started' | 'In progress' | 'Completed'): void {
    this.validateStatus(status)
    this.status = status
  }

  /**
   * Returns a string representation of the task, including all key fields
   * such as task ID, category, author, title, description, status, deadline, createdAt, and grade.
   *
   * @returns {string} - A string representing the task.
   */
  toString(): string {
    return `Task ID: ${this.taskId}, 
    Category: ${this.category}, 
    Type: ${this.taskType}, 
    Author: ${this.author}, 
    Title: ${this.title}, 
    Description: ${this.description}, 
    Status: ${this.status}, 
    Deadline: ${this.deadline}, 
    Created At: ${this.createdAt},
    Grade: ${this.grade}`
  }
}
