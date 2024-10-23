"use strict";
/**
 * The Task Manager handles the creation and handling of tasks. It also handles notification
 * for both teachers and students.
 *
 * @class TaskManager
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const NotificationSystem_1 = require("./NotificationSystem");
// interface TaskGrade {
//   taskId: string
//   student: User
//   grade: Grade
// }
class TaskManager {
    /**
     * The constructor initializes the TaskManager with an empty list of tasks.
     * This is where all tasks assigned to students will be stored.
     */
    constructor() {
        this.assignedTasks = [];
        this.tasks = [];
        this.notificationSystem = new NotificationSystem_1.NotificationSystem('newTask');
    }
    /**
     * Creates a new task for the student.
     * Only teachers are allowed to create tasks.
     *
     * @param {Task} task - The task to be created.
     * @throws Will throw an error if no student or teacher is set, or if a task with the same ID already exists.
     */
    createTask(task) {
        if (!this.student || !this.teacher) {
            throw new Error('Student or teacher must be set before creating a task.');
        }
        if (this.teacher.role !== 'Teacher') {
            throw new Error('Only teachers can create tasks.');
        }
        console.log('Creating task for student:', this.student);
        // Check if the task already exists, if so throw an error
        if (this.tasks.find((t) => t.taskId === task.taskId)) {
            throw new Error(`A task with the ID ${task.taskId} already exists.`);
        }
        // Add the task to the list of tasks
        this.tasks.push(task);
        this.notifyStudent(this.student, 'newTask', task);
    }
    /**
     * This method assigns a task to a student, but only if the assigner is a teacher.
     * It also adds the teachers name as the author of the task.
     *
     * @param {Task} task - The task to assign to the student.
     * @param {User} teacher - The teacher assigning the task.
     * @param {User} student - The student to whom the task is assigned.
     * @throws Will throw an error if the user assigning the task is not a teacher.
     */
    assignTaskToStudent(task, teacher, student) {
        if (teacher.role !== 'Teacher') {
            throw new Error('Only teachers can assign tasks.');
        }
        this.teacher = teacher;
        task.author = teacher.first_name + ' ' + teacher.last_name;
        this.addStudent(student);
        this.createTask(task);
        console.log(`${this.student.first_name}\n ${this.student.last_name} has been assigned the task: ${task.title}`);
    }
    /**
     * Grades a task for a student by searching for tasks with the status 'Completed'.
     *
     * @param {string} taskId - The ID of the task to grade.
     * @param {User} student - The student who completed the task.
     * @param {Grade} grade - The grade to assign to the task.
     */
    gradeTask(taskId, student, grade) {
        const completedTasks = this.tasks.filter((task) => task.status === 'Completed');
        const gradedTask = completedTasks.find((task) => task.taskId === taskId);
        if (!gradedTask) {
            throw new Error(`Task with ID ${taskId} not found among completed tasks.`);
        }
        this.grade = grade;
        this.notificationSystem.setNotificationType('taskGraded');
        this.notifyStudent(student, 'taskGraded', gradedTask);
        console.log(`Task ${taskId} graded for student ${student.first_name} ${student.last_name}.`);
    }
    /**
     * Updates a task from the task manager by its ID.
     * Notifies the student if the task is successfully updated.
     *
     * @param {string} taskId - The ID of the task to remove.
     * @param {Task} updatedTask - The updated task object.
     * @throws Will throw an error if the task with the given ID is not found.
     */
    updateTask(taskId, updatedTask) {
        this.tasks = this.tasks.map((task) => task.taskId === taskId ? updatedTask : task);
        if (!this.tasks.find((task) => task.taskId === taskId)) {
            throw new Error(`Task with ID ${taskId} not found.`);
        }
        this.notificationSystem.setNotificationType('taskUpdated');
        this.notifyStudent(this.student, 'taskUpdated', updatedTask);
        console.log(`The task with id ${taskId} has been updated ${updatedTask}.`);
    }
    /**
     * Removes a task from the task manager by its ID.
     * Notifies the student if the task is successfully removed.
     *
     * @param {string} taskId - The ID of the task to remove.
     * @throws Will throw an error if the task with the given ID is not found.
     */
    removeTask(taskId) {
        const removedTask = this.tasks.find((task) => task.taskId === taskId);
        if (!removedTask) {
            throw new Error(`Task with ID ${taskId} not found.`);
        }
        else if (removedTask) {
            this.notificationSystem.setNotificationType('taskDeleted');
            this.notifyStudent(this.student, 'taskDeleted', removedTask);
        }
        this.tasks = this.tasks.filter((task) => task.taskId !== taskId);
        console.log(`The task with id ${taskId} has been removed.`);
    }
    /**
     * Logs all tasks in the task manager to the console.
     * If no tasks exist, logs a message indicating that there are no tasks.
     */
    listTasks() {
        if (this.tasks.length === 0) {
            console.log('No tasks available.');
            return;
        }
        this.tasks.forEach((task) => {
            console.log(task.toString());
        });
    }
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
    notifyStudent(student, notificationType, task) {
        if (!student || !student.first_name + student.last_name) {
            console.error('Invalid student object or student name is missing', student);
            return;
        }
        this.notificationSystem.sendNotification({
            recipient: student.first_name + student.last_name,
            taskTitle: task.title,
            category: task.category,
            taskType: task.taskType,
            deadline: task.deadline,
        });
    }
    /**
     * Adds a student to the task manager.
     * Ensures the student object is valid and contains a name.
     *
     * @param {User} student - The student to be added.
     */
    addStudent(student) {
        if (student && student.first_name + student.last_name) {
            this.student = student;
        }
        else {
            console.error('No student object provided');
        }
    }
    /**
     * Sends a remainder notification to the stundent if the student hasn't started
     * working on the assignment wihin a week.
     *
     * @param {Task} task - The task associated with the notification.
     */
    remindAboutUnstartedTask(task) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        const now = new Date().getTime();
        const taskCreationTime = new Date(task.createdAt).getTime();
        if (!task.hasStarted() && now - taskCreationTime > oneWeek) {
            this.notificationSystem.setNotificationType('taskReminder');
            this.notifyStudent(this.student, 'taskReminder', task);
            console.log(`Reminder sent to ${this.student.first_name}\n${this.student.last_name} for unstarted task: ${task.title}.`);
        }
    }
    /**
     * Sends a remainder notification to the stundent if the deadline is approaching within two days.
     *
     * @param {Task} task - The task associated with the notification.
     */
    checkDeadlineApproaching(task) {
        const twoDays = 2 * 24 * 60 * 60 * 1000;
        const now = new Date().getTime();
        const deadlineTime = new Date(task.deadline).getTime();
        // If the deadline is within two days, notify the student
        if (deadlineTime - now <= twoDays) {
            this.notificationSystem.setNotificationType('upComingTask');
            this.notifyStudent(this.student, 'upComingTask', task);
            console.log(`Reminder sent to ${this.student.first_name}\n${this.student.last_name} for Deadline approaching for task: ${task.title}.`);
        }
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=TaskManager.js.map