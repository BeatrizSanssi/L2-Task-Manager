/**
 * This is a test file for the TaskManager class.
 * @test TaskManagerTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { TaskManager } from '../Task Management System/TaskManager'
import { Task } from '../Task Management System/Task'
import { User } from '../Task Management System/User'

describe('TaskManager', () => {
  let taskManager: TaskManager

  beforeEach(() => {
    taskManager = new TaskManager()
  })

  describe('Task', () => {
    let task: Task

    beforeEach(() => {
      task = new Task(
        '1',
        'English',
        'Assignment',
        'Teacher',
        'Task 1',
        'This is the first task',
        new Date('2024-10-01'),
        'not started',
        new Date('Created at 2024-09-01'),
      )
    })

    it('should create a new task', () => {
      expect(task.taskId).toBe('1')
      expect(task.category).toBe('English')
      expect(task.taskType).toBe('Assignment')
      expect(task.author).toBe('Teacher')
      expect(task.title).toBe('Task 1')
      expect(task.description).toBe('This is the first task')
      expect(task.deadline).toEqual(new Date('2024-10-01'))
      expect(task.status).toBe('not started')

      console.log('New test task created!', task)
    })
  })

  it('should assign a task to a student', () => {
    const task = new Task(
      '1',
      'English',
      'Assignment',
      'Teacher',
      'Task 1',
      'This is the first task',
      new Date('Deadline: 2024-10-01'),
      'not started',
      new Date('Created at 2024-09-01'),
    )
    const author = 'Teacher'
    const teacher = new User(
      'Maria Johnson',
      'maria.johnson@lnu.se',
      'teacher',
    )
    const student = new User(
      'Paul',
      'paul.1@student.lnu.se',
      'student',
    )

    taskManager.assignTaskToStudent(task, teacher, student)

    // Check if the tasks author is the teacher
    expect(task.author).toBe('Maria Johnson')

    // Check if the student has been assigned the task
    expect(taskManager.student).toEqual(student);

    // Check if the task has been created
    // expect(task).toEqual(task)
    expect(taskManager.tasks[0]).toEqual(task);

    console.log('Task assigned to student!', task)
  })
})
