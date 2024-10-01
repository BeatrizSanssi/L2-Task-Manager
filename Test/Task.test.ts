/**
 * This is a test file for the Task class.
 * @test TaskTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from '../Task Management System/Task'

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
      new Date('2024-09-01'),
    )
  })

  it('should create a new task', () => {
    expect(task.taskId).toBe('1')
    expect(task.category).toBe('English')
    expect(task.taskType).toBe('Assignment')
    expect(task.author).toBe('Teacher')
    expect(task.title).toBe('Task 1')
    expect(task.description).toBe('This is the first task')
    // Check only the date part of the deadline
    expect(task.deadline.toISOString().split('T')[0]).toBe('2024-10-01')
    expect(task.status).toBe('not started')
    // Check only the date part of the createdAt date
    expect(task.createdAt.toISOString().split('T')[0]).toBe('2024-09-01')

    console.log('New test task created!', task)
  })

  it('should validate task types correctly', () => {
    expect(() => {
      new Task(
        '2',
        'English',
        'InvalidType',
        'Teacher',
        'Task 2',
        'This is the second task',
        new Date('2024-11-01'),
        'not started',
        new Date('2024-09-02'),
      )
    }).toThrow('Invalid task type: InvalidType. Valid task types are: Assignment, Test, Project, Group project')

    console.log('Task type validation works correctly!')
  })

  it('should validate task status correctly', () => {
      expect(() => {
        new Task(
          '3',
          'Math',
          'Test',
          'Teacher',
          'Task 3',
          'This is the third task',
          new Date('2024-12-01'),
          'invalid status',
          new Date('2024-09-03'),
        )
      }).toThrow('Invalid status: invalid status. Valid statuses are: not started, in progress, completed')

      console.log('Task status validation works correctly!')
    })

  it('should throw an error for an empty title', () => {
    expect(() => {
      new Task(
        '4',
        'History',
        'Assignment',
        'Teacher',
        '',
        'This task has no title',
        new Date('2024-10-15'),
        'not started',
        new Date('2024-09-05'),
      )
    }).toThrow('Title cannot be empty.')
  })

  it('should throw an error for an invalid deadline', () => {
    expect(() => {
      new Task(
        '5',
        'Art',
        'Project',
        'Teacher',
        'Task 5',
        'This task has an invalid deadline',
        new Date('invalid-date'),
        'not started',
        new Date('2024-09-06'),
      )
    }).toThrow('Invalid deadline. Please provide a valid date.')
  })
})
