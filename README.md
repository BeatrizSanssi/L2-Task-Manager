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

## Public API

The following classes and methods are intended for use by developers integrating this module:

- **TaskManager**: Responsible for managing tasks, assigning tasks to users, and handling notifications.
  • createTask(): Creates a new task.
  • assignTaskToStudent(): Assigns a task to a student.
  • updateTask(): Updates an existing task.
  • removeTask(): Removes a task by its ID.
  • notifyStudent(): Sends notifications to a student regarding tasks.
  • remindAboutUnstartedTask(): Sends a reminder if a task hasn’t been started.
  • checkDeadlineApproaching(): Sends a reminder if a task deadline is approaching.

- **User**: Represents a student or teacher.
  • createPassword(): Creates and hashes a user’s password.
  • checkPassword(): Verifies a password.

- **Task**: Represents a task with fields like ID, category, type, title, description, deadline, and status.

- **Category**: Represents the task’s category (e.g., English, Math).

- **NotificationSystem**: Handles task notifications.
  • sendNotification(): Sends a task-related notification to a user.

Internal API (Not for public use)

The following methods and properties are internal and should not be accessed or modified directly by users of the module. These are encapsulated for internal logic only:

• TaskManager:
• private assignedTasks: Tracks internally assigned tasks, not for direct user manipulation.
• Task:
• private validateNotEmpty(): Validates that required fields are not empty.
• private validateTaskType(): Validates that the task type is valid.
• private markAsCompleted(): Internally updates task status to ‘Completed’.
• private markAsInProgress(): Internally updates task status to ‘In Progress’.
• private markAsNotStarted(): Internally updates task status to ‘Not Started’.
• Category:
• private validateCategoryName(): Validates that the category name is valid.
• private static validCategories: Stores valid category names.
• User:
• private isValidPassword(): Validates that the user’s password meets the required length.
• private hashedPassword: The user’s password stored securely, inaccessible from outside the class.

## Testing

To test the module, you can run the following command: npm run test

## Contribution

If you want to contribute to the development of this module, feel free to fork the repository and create a pull request. Please make sure your code is well-documented and that it follows the existing coding standards.

### How to contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write your code and tests.
4. Submit a pull request explaining your changes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact

For any questions or suggestions, feel free to contact Beatriz Sanssi.

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

### Installation

Install the module via npm:

```bash
npm install task-management-system
```

### Usage

To see a full example of how to use the Task Management System, check out the TestApp file included in the repository. This file demonstrates the following functionalities:

• User creation and password management
• Task creation and assignment
• Notification system usage
• Task category management

You can find the example here or by running the module in your environment.

### Example Usage Scenarios

1. Automating Task Reminders: Use the module to automatically remind students about their upcoming or unstarted tasks.
2. Task Assignment: Teachers can assign tasks to students, and students can receive updates and reminders about these tasks.

### Versioning

This module follows semantic versioning (1.0.0). Please refer to the release notes for the latest updates.

### Support

If you encounter any issues or have any questions, feel free to open an issue on the GitHub repository.

### Testrapports (Test Reports)

The module has been thoroughly tested. Check the tests folder for test cases covering different functionalities like task creation, updates, assignment, and reminders. You can also check the tesreport for results.

| File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s            |
| --------------------- | ------- | -------- | ------- | ------- | ---------------------------- |
| All files             | 90.11   | 82.53    | 95.91   | 89.82   |                              |
| Category.ts           | 92.3    | 80       | 100     | 92.3    | 59                           |
| NotificationSystem.ts | 92      | 94.73    | 66.66   | 92      | 34,94                        |
| Task.ts               | 96      | 92.3     | 95.23   | 96      | 152,175                      |
| TaskManager.ts        | 87.09   | 68       | 100     | 85.96   | 45,73,92,106,126,144-145,152 |
| User.ts               | 81.81   | 100      | 100     | 81.81   | 65-66,81-82                  |
