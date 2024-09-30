# Test report for Task Management System

## Test case 1: Create a task and assign it to a user

**What is being tested**:
Method `createTask` in class `TaskManager`.

**How it is tested**:

Create a task...

1. With the id `1`
2. Witht the category `english`
3. With the type `assignment`
4. With the title `Task 1`.
5. With the author set to `Teacher`
6. With the description `This is the first task`
7. With the deadline set to `2024-10-01`
8. With the status `not started`
Console log the task with the correct variables

**Expected outcome**:  
The task should be created and displayed on consol.

**Actual outcome**:  
Failed. The order and number of the variables were not correct

**After correcting**:
The task was created! console.log
  New test task created! Task {
    taskId: '1',
    category: 'English',
    type: 'Assignment',
    author: 'Teacher',
    title: 'Task 1',
    description: 'This is the first task',
    deadline: 2024-10-01T00:00:00.000Z,
    status: 'not started'
  }

## Test case 2: Create a user

**What is being tested**:
Method `createUser` and `assignRole` in class `User`

**How it is tested**:

Create a User...

1. With a generated id
2. With the name `Paul`.
3. With the email set to `paul.1@student.lnu.se`
4. With the role set to `student`

Console log the user with the correct variables

**Expected outcome**:  
The user should be created and displayed on consol. The users password should be hashed. The user should be assigned a role.

**Actual outcome**:
  console.log
    User id generated! 92e71ea9-f0d3-47a6-8425-ed4e9cc7faa0

      at Object.<anonymous> (Test/User.test.ts:20:13)

  console.log
    User Paul created with hashed password.

      at User.<anonymous> (module/User.ts:40:13)

  console.log
    The password is hashed correctly for Paul

      at Test/User.test.ts:34:13

  console.log
    User role assigned! student

      at Object.<anonymous> (Test/User.test.ts:40:13)

## Test case 3: Assign a task to a user

**What is being tested**:
Method `assignTaskToStudent` and `getTask` in class `TaskManager`

**How it is tested**:

Create a task...

1. With the id `1`
2. Witht the category `english`
3. With the type `assignment`
4. With the title `Task 1`.
5. With the author set to `Teacher`
6. With the description `This is the first task`
7. With the deadline set to `2024-10-01`
8. With the status `not started`
Console log the task with the correct variables

**Expected outcome**:  
The author should be able to assign a task to a student.

**Actual outcome**:
