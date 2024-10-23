# Task Management System

## Overview

The **Task Management System** is a simple module that helps manage tasks for students and teachers. It includes functionality for creating tasks, assigning tasks to users, notifying users about tasks, and handling categories for tasks.

## Features

- **Task creation**: Create tasks with details like category, type, title, description, and deadline.
- **User management**: Create users with different roles (student or teacher), assign tasks to them.
- **Notifications**: Notify users about new tasks, updates, and reminders.
- **Task categories**: Organize tasks into categories (e.g., English, Math, Science).
- **Task Updating**: Modify or update tasks and notify users about changes.
- **Task Deletion**: Remove tasks and notify users when tasks are deleted.
- **Status management**: Track the status of tasks (not started, in progress, completed).

### USP (Unique Selling Point)

**What does the module do?**

- Creates and manages tasks and users.
- Assigns tasks to specific users.
- Automatically sends reminders when a task has not been started or when a deadline is approaching.
- Provides an API to interact with the system for creating, updating, and deleting tasks.

**What does the module not do?**

- It does not manage large backend databases or complex storage solutions.
- It does not provide any frontend or user interface components.
- The focus is on business logic and easy API usage, not on visual components or user interfaces.

## Public API

The following classes and methods are intended for use by developers integrating this module:

### TaskManager

Responsible for managing tasks, assigning tasks to users, and handling notifications.

#### TaskManager Methods

- **createTask(task: Task): void**  
  Creates a new task.

  Parameters:

  - `task` (Task): The task object containing task details (ID, category, title, etc.).

- **assignTaskToStudent(task: Task, teacher: User, student: User): void**  
  Assigns a task to a student and records the teacher assigning it.

  Parameters:

  - `task` (Task): The task to assign.
  - `teacher` (User): The teacher assigning the task.
  - `student` (User): The student to whom the task is assigned.

- **updateTask(taskId: string, updatedTask: Task): void**  
  Updates a task using its id.

  Parameters:

  - `taskId` (string): The tasks id.
  - `updatedTask` (Task): The updated task containing task details (ID, category, title, etc.).

- **removeTask(taskId: string): void**  
  Removes a task using its id.

  Parameters:

  - `taskId` (string): The tasks id.

- **listTasks(): void**  
  Lists all existing tasks.

- **notifyStudent(student: User, notificationType: string, task: Task): void**  
  Sends a notification to a student regarding a task.

  Parameters:

  - `student` (User): The student to notify.
  - `notificationType` (string): The type of notification (e.g., `newTask`, `taskReminder` etc.).
  - `task` (Task): The task related to the notification.

  ```typescript
    /**
   * Sends a notification to the student regarding a task.
   * Ensures the student and task information is valid.
   * If the notification type is not found, it logs an error message.
   *
   * @param {User} student - The student to notify.
   * @param {string} message - The message to send.
   * @param {string} notificationType - The task associated with the notification.
   * @param {Task} task - The task associated with the notification.
   */
  notifyStudent(student: User, notificationType: string, task: Task): void {
    if (!student || !student.first_name + student.last_name) {
      console.error(
        'Invalid student object or student name is missing',
        student,
      )
      return
    }

    this.notificationSystem.sendNotification({
      recipient: student.first_name + student.last_name,
      taskTitle: task.title,
      category: task.category,
      taskType: task.taskType,
      deadline: task.deadline,
    })
  }

- **addStudent(student: User): void**  

  Adds a student to the task manager.

  Parameters:

  - `student` (User): The student to add.

- **remindAboutUnstartedTask(task: Task): void**  
  Sends a remainder notification to the student regarding an unstarted task.

  Parameters:

  - `task` (Task): The task related to the remainder notification.

- **checkDeadlineApproaching(task: Task): void**  
  Checks if the deadline for the task is approaching and sends a reminder if necessary.

  Parameters:

  - `task` (Task): The task to check.

### User

Represents a student or teacher.

#### User Methods

- **setPassword(password: string): Promise< void >**
  Sets the users password.

  Parameters:

  - `password` (string): The password to set.

  ```typescript
    /**
   * Sets the users password.
   *
   * @param {string} password - The user's password to store.
   * @throws {Error} - If the password is invalid.
   */
  async setPassword(password: string): Promise<void> {
    if (!this.isValidPassword(password)) {
      throw new Error('Password must be at least 8 characters long.')
    }

    this.password = password
    this.assignRole(this.role)
    console.log(
      `User ${this.first_name} ${this.last_name} with role ${this.role} has been created.`,
    )
  }


- **checkPassword(password: string): Promise< void >**  

  Verifies whether the provided password matches the stored password.

  Parameters:

  - `password` (string): The password to verify.

- **assignRole(role: 'Student' | 'Teacher'): void**  
  Assigns a role to the user.

  Parameters:

  - `role` ('student' | 'teacher'): The password to verify

### Task

Represents a task with fields like ID, category, type, title, description, deadline, and status.

#### Task Methods

- **hasStarted(): boolean**  
  Determines whether the task has been started by the student.

- **hasCompleted(): boolean**  
  Determines whether the task has been completed.

- **inProgress(): boolean**  
  Determines whether the task is currently in progress.

- **notStarted(): boolean**  
  Determines whether the task has not been started.

- **toString(): string**  
  Returns a string representation of the task.

  ```typescript
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


### Category

Represents the task’s category (e.g., English, Math).

#### Category Methods

- **setCategoryName(newName: string): void**  
  Sets the category name to a new valid category.

  Parameters:

  - `newName` (string): The catagory name to set.

  ```typescript
    /**
   * Sets the category name to a new valid category.
   *
   * @param {string} newName - The new category name to set.
   * @throws {Error} - Throws an error if the new category name is invalid.
   */
  public setCategoryName(newName: string): void {
    if (!Category.validCategories.includes(newName)) {
      throw new Error(
        `Invalid category name: ${newName}. Please choose from the valid categories.`,
      )
    }

    this.name = newName
    console.log(`Category name updated to: ${this.name}`)
  }


- **toString(): string**  

  Returns the category name as a string.

### Notification System

Handles task notifications.

#### Notification System Methods

- **setNotificationType(type: string): void**  
  Updates the notification type and corresponding message.

  Parameters:

  - `type` (string): The new notification type.

- **sendNotification(notificationDetails: {recipient: string, taskTitle: string, category: string, taskType: string, deadline: Date}): void**  
  Sends a notification to a recipient with task details.

  Parameters:

  - `recipient` (string): The new notification type.
  - `taskTitle` (string): The new notification type.
  - `category` (string): The new notification type.
  - `taskType` (string): The new notification type.
  - `deadline` (string): The new notification type.

- **toString(): string**  
  Returns the type of the notification as a string.

### Grade

Handles the grading of completed tasks.

#### Grade Methods

- **setGradeValue(newValue: string): void**  
  Sets the grade value to a valid grade.

  Parameters:

  - `newValue` (string): The new grade value to set.

  ```typescript
    /**
     * Sets the grade value to a new valid grade.
     *
     * @param {string} newValue - The new grade value to set.
     * @throws {Error} - Throws an error if the new grade value is invalid.
     */
    public setGradeValue(newValue: string): void {
      if (!Grade.validGrades.includes(newValue)) {
        throw new Error(
          `Invalid grade value: ${newValue}. Please choose from the valid grades.`,
        )
      }

      this.value = newValue
      console.log(`Grade value updated to: ${this.value}`)
    } 
    
- **toString(): string**  

  Returns the grade value as a string.

## Testing

To test the module, you can run the following command:

```bash
npm run test
```

## Contribution

If you want to contribute to the development of this module, feel free to fork the repository and create a pull request. Please make sure your code is well-documented and that it follows the existing coding standards.

### How to contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write your code and tests.
4. Submit a pull request explaining your changes.

## Report Bugs

If you encounter any issues or bugs, please report them [here](https://github.com/BeatrizSanssi/L2-Task-Manager/issues).

### License

This project is licensed under the MIT License. See the LICENSE file for more details [MIT License](./LICENSE).

### Contact

For any questions or suggestions, feel free to contact Beatriz Sanssi <bs222eh@student.lnu.se>

## Requirements

- User must be added as either teacher or student
- User must have an id and password
- Teacher must be able to add a task
- Teacher must be able to remove a task
- Teacher must be able to update a task
- Teacher must be able to categorize the task
- Teacher must be able to add deadline for each task
- Teacher must be able to assign a task to a student
- Student must be able to be notified about a new task
- Student must be able to be notified about a tasks upcomming deadline
- Student must be able to update the status of the task to 'in progress' or 'completed'
- Students must be able to be notified with a remainder about a unstarted task

### Installation

Install the module via npm:

```bash
npm install task-management-system
```

### Usage

To see a full example of how to use the Task Management System, check out the TestApp file included in the repository, in the demo folder. This file demonstrates the following functionalities:

• User creation and password management
• Task creation and assignment
• Notification system usage
• Task category management

```bash
# To run the demo:
node dist/demo/TestApp.js
```

You can find the example here or by running the module in your environment.

### Example Usage Scenarios

1. Automating Task Reminders: Use the module to automatically remind students about their upcoming or unstarted tasks.
2. Task Assignment: Teachers can assign tasks to students, and students can receive updates and reminders about these tasks.

### Versioning

This module follows semantic versioning (1.0.0). For change logs and updates, please see [CHANGELOG.md](./CHANGELOG.md).

### Support

If you encounter any issues or have any questions, feel free to open an issue on the GitHub repository.

### Test Reports

The module has been thoroughly tested. Check the tests folder for test cases covering different functionalities like task creation, updates, assignment, and reminders (./Test).

[Link to Test Report](https://beatrizsanssi.github.io/L2-Task-Manager/Report/test-report.html)
