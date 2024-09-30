/**
 * This is a test file for the NotificationSystem class.
 * @test NotificationSystemTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { NotificationSystem } from '../module/NotificationSystem';

describe('NotificationSystem', () => {
  let notificationSystem: NotificationSystem;

  beforeEach(() => {
    // Create a new notification system before each test
    notificationSystem = new NotificationSystem(
      'You have a new task!',
      'newTask'
    );
  });

  it('should create a notification system with valid message and type', () => {
    expect(notificationSystem.message).toBe('You have a new task!');
    expect(notificationSystem.type).toBe('newTask');
    console.log('NotificationSystem created successfully!', notificationSystem);
  });

  it('should send a notification with correct details', () => {
    const notificationDetails = {
      recipient: 'John Doe',
      taskTitle: 'Math Assignment',
      category: 'Math',
      type: 'Assignment',
      deadline: new Date('2024-10-01'),
    };

    // Mock console.log to check if the correct details are printed
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    notificationSystem.sendNotification(notificationDetails);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification sent to John Doe:'
    );
    expect(consoleSpy).toHaveBeenCalledWith('Task: Math Assignment');
    expect(consoleSpy).toHaveBeenCalledWith('Category: Math');
    expect(consoleSpy).toHaveBeenCalledWith('Type: Assignment');
    expect(consoleSpy).toHaveBeenCalledWith('Deadline: 2024-10-01T00:00:00.000Z');
    expect(consoleSpy).toHaveBeenCalledWith('Message: You have a new task!');

    console.log('Notification sent successfully!', notificationDetails);

    // Clean up the mock
    consoleSpy.mockRestore();
  });
});