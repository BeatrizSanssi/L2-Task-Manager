/** 
 * This is a test file for the Task class.
 * @test TaskTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

import { Task } from '../Task';

describe('Task', () => {
  let task: Task;

  beforeEach(() => {
    task = new Task('1', 'Task 1', 'Teacher', 'This is the first task', '2024-10-01', 'not started', 'student');
  });

  it('should create a new task', () => {
    expect(task).toEqual({
      id: '1',
      author: 'Teacher',
      title: 'Task 1',
      description: 'This is the first task',
      deadline: '2024-10-01',
      status: 'not started',
      user: 'student'
    });

    console.log('New test task created!', task);
  });
});
