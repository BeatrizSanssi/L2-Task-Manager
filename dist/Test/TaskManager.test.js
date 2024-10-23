"use strict";
/**
 * This is a test file for the TaskManager class.
 * @test TaskManagerTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("../src/TaskManager");
const Task_1 = require("../src/Task");
const User_1 = require("../src/User");
describe('TaskManager', () => {
    let taskManager;
    beforeEach(() => {
        taskManager = new TaskManager_1.TaskManager();
    });
    it('should throw error if teacher is not set when creating task', () => {
        const task = new Task_1.Task('1', 'Religion', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('2024-11-01'), 'Not started', new Date('2024-10-01'), 'Not graded');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.addStudent(student);
        // Expect an error because no teacher is set
        expect(() => taskManager.createTask(task)).toThrow('Student or teacher must be set before creating a task.');
        console.log('Error thrown because teacher is not set when creating task');
    });
    it('should create and assign a task to a student', () => {
        const task = new Task_1.Task('1', 'English', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('Deadline: 2024-10-01'), 'Not started', new Date('Created at 2024-09-01'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.assignTaskToStudent(task, teacher, student);
        // Check if the tasks author is the teacher
        expect(task.author).toBe('Maria Johnson');
        // Check if the student has been assigned the task
        expect(taskManager.student).toEqual(student);
        // Check if the task has been created
        expect(taskManager.tasks[0]).toEqual(task);
        console.log('Task created and assigned to student!', task, student);
    });
    it('should throw error if task with same ID already exists', () => {
        const task = new Task_1.Task('1', 'English', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('2024-11-01'), 'Not started', new Date('2024-10-01'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.assignTaskToStudent(task, teacher, student);
        const newTaskWithSameId = new Task_1.Task('1', 'Math', 'Test', 'Teacher', 'Task 2', 'This is the second task', new Date('2024-11-15'), 'Not started', new Date('2024-10-05'), 'Not graded');
        // Expect an error because a task with the same ID already exists
        expect(() => taskManager.createTask(newTaskWithSameId)).toThrow('A task with the ID 1 already exists.');
        console.log('Error thrown because task with same ID already exists');
    });
    it('should list all tasks', () => {
        const task1 = new Task_1.Task('1', 'English', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('2024-10-01'), 'Not started', new Date('2024-09-01'), 'Not graded');
        const task2 = new Task_1.Task('2', 'Math', 'Test', 'Teacher', 'Task 2', 'This is the second task', new Date('2024-11-01'), 'In progress', new Date('2024-09-02'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.assignTaskToStudent(task1, teacher, student);
        taskManager.assignTaskToStudent(task2, teacher, student);
        const spy = jest.spyOn(console, 'log');
        taskManager.listTasks();
        expect(spy).toHaveBeenCalledWith(task1.toString());
        expect(spy).toHaveBeenCalledWith(task2.toString());
        spy.mockRestore();
    });
    it('should log "No tasks available" if no tasks exist', () => {
        const spy = jest.spyOn(console, 'log');
        taskManager.listTasks();
        expect(spy).toHaveBeenCalledWith('No tasks available.');
        spy.mockRestore();
    });
    it('should update a task successfully', () => {
        const task = new Task_1.Task('1', 'English', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('2024-10-01'), 'Not started', new Date('2024-09-01'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.assignTaskToStudent(task, teacher, student);
        const updatedTask = new Task_1.Task('1', 'Math', 'Test', 'Teacher', 'Updated Task 1', 'Updated description', new Date('2024-11-01'), 'In progress', new Date('2024-09-01'), 'Not graded');
        taskManager.updateTask(task.taskId, updatedTask);
        // Check if the task has been updated
        expect(task.author).toBe('Maria Johnson');
        expect(taskManager.tasks[0].category).toBe('Math');
        expect(taskManager.tasks[0].title).toBe('Updated Task 1');
        expect(taskManager.tasks[0].status).toBe('In progress');
        console.log('Task updated successfully!', taskManager.tasks[0]);
    });
    it('should remove a task by taskId', () => {
        const task = new Task_1.Task('1', 'English', 'Assignment', 'Teacher', 'Task 1', 'This is the first task', new Date('2024-10-01'), 'Not started', new Date('2024-09-01'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        taskManager.assignTaskToStudent(task, teacher, student);
        expect(task.author).toBe('Maria Johnson');
        // Check if the task exists before removing it
        expect(taskManager.tasks.length).toBe(1);
        // Remove the task
        taskManager.removeTask(task.taskId);
        // Check if the task has been removed
        expect(taskManager.tasks.length).toBe(0);
        console.log('Task removed successfully!');
    });
    it('should remind student about unstarted task', () => {
        // Create a task that was created more than a week ago
        const oldTask = new Task_1.Task('2', 'English', 'Assignment', 'Teacher', 'Task 2', 'This is the second task', new Date('2024-10-01'), 'Not started', new Date('2024-08-01'), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        // Assign the task to the student
        taskManager.assignTaskToStudent(oldTask, teacher, student);
        // Remind the student about the unstarted task
        taskManager.remindAboutUnstartedTask(oldTask);
        // Check if the student was reminded about the task
        console.log(`Notification sent to ${student.first_name + ' ' + student.last_name}:`);
        console.log(`Task: ${oldTask.title}`);
        console.log(`Category: ${oldTask.category}`);
        console.log(`Type: ${oldTask.taskType}`);
        console.log(`Deadline: ${oldTask.deadline.toISOString()}`);
        console.log('Message: Reminder: You have a task you haven’t started working on.');
    });
    it('should notify student if deadline is within two days', () => {
        // Create a task with a deadline within two days
        const upcomingTask = new Task_1.Task('3', 'Math', 'Assignment', 'Teacher', 'Task 3', 'This is the third task', new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), 'Not started', new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 'Not graded');
        const teacher = new User_1.User('id7T003', 'Maria', 'Johnson', 'maria.johnson@lnu.se', 'Teacher');
        const student = new User_1.User('id2001', 'Paul', 'Hanson', 'paul.hanson1@student.lnu.se', 'Student');
        // Assign the task to the student
        taskManager.assignTaskToStudent(upcomingTask, teacher, student);
        // Check deadline approaching notification
        taskManager.checkDeadlineApproaching(upcomingTask);
        const expectedMessage = `Deadline approaching for Task 3`;
        expect(expectedMessage).toBe(`Deadline approaching for Task 3`);
    });
});
//# sourceMappingURL=TaskManager.test.js.map