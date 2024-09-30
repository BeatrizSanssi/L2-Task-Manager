/**
 * This is a test file for the Task class.
 * @test TaskTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from '../module/Task'

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
    )
  })

  it('should create a new task', () => {
    expect(task.taskId).toBe('1')
    expect(task.category).toBe('English')
    expect(task.type).toBe('Assignment')
    expect(task.author).toBe('Teacher')
    expect(task.title).toBe('Task 1')
    expect(task.description).toBe('This is the first task')
    expect(task.deadline).toEqual(new Date('2024-10-01'))
    expect(task.status).toBe('not started')

    console.log('New test task created!', task)
  })
})
