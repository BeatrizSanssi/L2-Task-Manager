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

Parameters:

- **notifyStudent(student: User, notificationType: string, task: Task): void**  
  Sends a notification to a student regarding a task.

  Parameters:

  - `student` (User): The student to notify.
  - `notificationType` (string): The type of notification (e.g., `newTask`, `taskReminder` etc.).
  - `task` (Task): The task related to the notification.

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

- **createPassword(password: string): Promise< void >**
  Creates and hashes the users password.

Parameters:

- `password` (string): The password to create.

- **checkPassword(password: string): Promise< void >**  
  Verifies whether the provided password matches the stored hashed password.

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

Parameters:

- **hasCompleted(): boolean**  
  Determines whether the task has been completed.

Parameters:

- **inProgress(): boolean**  
  Determines whether the task is currently in progress.

Parameters:

- **notStarted(): boolean**  
  Determines whether the task has not been started.

Parameters:

- **toString(): string**  
  Returns a string representation of the task.

Parameters:

### Category

Represents the task’s category (e.g., English, Math).

#### Category Methods

- **setCategoryName(newName: string): void**  
  Sets the category name to a new valid category.

Parameters:

- `newName` (string): The catagory name to set.

- **toString(): string**  
  Returns the category name as a string.

Parameters:

### Notification System

Handles task notifications.

#### Notification System Methods

- **setNotificationType(type: string): void**  
  Updates the notification type and corresponding message.

Parameters:

- `type` (string): The new notification type.

- **sendNotification(notificationDetails: {
  recipient: string
  taskTitle: string
  category: string
  taskType: string
  deadline: Date
  }): void**  
  Sends a notification to a recipient with task details.

Parameters:

- `recipient` (string): The new notification type.
- `taskTitle` (string): The new notification type.
- `category` (string): The new notification type.
- `taskType` (string): The new notification type.
- `deadline` (string): The new notification type.

- **toString(): string**  
  Returns the type of the notification as a string.

Parameters:

## Internal API (Not for public use)

The following methods and properties are internal and should not be accessed or modified directly by users of the module. These are encapsulated for internal logic only:

### TaskManager (Internal)

Handles task notifications.

#### TaskManager Private Methods

- **private assignedTasks: Task[]**  
  Tracks internally assigned tasks, not for direct user manipulation..

Parameters:

- `type` (string): The new notification type.

### User (Internal)

#### User Private Methods

- **private isValidPassword(password: string): boolean**  
  Validates that the provided password meets the minimum length requirement.

Parameters:

- `password` (string): The password to validate.

### Task (Internal)

#### Task Private Methods

- **private validateNotEmpty(value: string, fieldName: string): void**  
  Validates that the provided password meets the minimum length requirement.

Parameters:

- `value` (string): The value to check.
- `fieldName` (string): The name of the field being validated.

- **private validateTaskType(taskType: string): void**  
  Validates that the provided task type is one of the allowed types.

Parameters:

- `taskType` (string): The task type to check.

- **private validateStatus(status: string): void**  
  Validates that the task status is one of the allowed statuses.

Parameters:

- `status` (string): The status to validate.
- `fieldName` (string): The name of the field being validated.

- **private validateDeadline(deadline: Date): void**  
  Validates that the provided deadline is a valid date object.

Parameters:

- `deadline` (Date): The deadline to validate.

- **private markAsCompleted(): void**  
  Marks the task as completed by updating the status.

Parameters:

- **private markAsInProgress(): void**  
  Marks the task as in progress by updating the status.

Parameters:

- **private markAsNotStarted(): void**  
  Marks the task as not started by updating the status.

Parameters:

- **private addTaskId(taskId: string): void**  
  Adds a task ID to the task after ensuring it is not empty.

Parameters:

- `taskId` (string): The unique task ID to add.

- **private addCategory(category: string): void**  
  Adds a category to the task after validating it is not empty.

Parameters:

- `category` (string): The category to add to the task.

- **private addType(
  taskType: 'Assignment' | 'Test' | 'Project' | 'Group project',
  ): void**  
  Adds a task type to the task after validating it is not empty.

Parameters:

- `taskType` (string): The task type to add to the task.

- **private addAuthor(author: string): void**  
  Adds an author to the task after validating it is not empty.

Parameters:

- `author` (string): The author to add to the task.

- **private addTitle(title: string): void**  
  Adds a title to the task after validating it is not empty.

Parameters:

- `title` (string): The title to add to the task.

- **private addDescription(description: string): void**  
  Adds a description to the task after validating it is not empty.

Parameters:

- `description` (string): The description to add to the task.

- **private addDeadline(deadline: Date): void**  
  Adds a deadline to the task after validating it is not empty or undefined.

Parameters:

- `deadline` (Date): The deadline to add to the task.

- **private addStatus(status: 'Not started' | 'In progress' | 'Completed'): void**  
  Adds a status to the task after validating it is not empty.

Parameters:

- `status` (string): The status to add to the task.

### Category (Internal)

#### Category Private Methods

- **private validateCategoryName(name: string): string**  
  Validates that the provided password meets the minimum length requirement.

Parameters:

- `name` (string): The name of the category to validate.

### Notification System (Internal)

#### Notification System Private Methods

- **private getMessage(type: string): string**  
  Returns the message associated with the notification type.

Parameters:

- `type` (string): The type of notification.

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
