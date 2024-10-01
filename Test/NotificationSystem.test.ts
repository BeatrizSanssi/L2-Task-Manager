/**
 * This is a test file for the NotificationSystem class.
 * @test NotificationSystemTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { NotificationSystem, messageTypes } from '../Task Management System/NotificationSystem'

describe('NotificationSystem', () => {
  let notificationSystem: NotificationSystem

  beforeEach(() => {
    // Create a new notification system before each test
    notificationSystem = new NotificationSystem(
      'You have a new task!',
      'newTask',
    )
  })

  it('should create a notification system with valid message and type', () => {
    expect(notificationSystem.message).toBe('You have a new task!')
    expect(notificationSystem.type).toBe('newTask')
    console.log('NotificationSystem created successfully!', notificationSystem)
  })

  it('should send a notification with correct details', () => {
    const notificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: 'Math Assignment',
      category: 'Math',
      taskType: 'Assignment',
      deadline: new Date('2024-10-01'),
    }

    // Mock console.log to check if the correct details are printed
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

    notificationSystem.sendNotification(notificationDetails)

    expect(consoleSpy).toHaveBeenCalledWith('Notification sent to Paul Hanson:')
    expect(consoleSpy).toHaveBeenCalledWith('Task: Math Assignment')
    expect(consoleSpy).toHaveBeenCalledWith('Category: Math')
    expect(consoleSpy).toHaveBeenCalledWith('Type: Assignment')
    expect(consoleSpy).toHaveBeenCalledWith(
      'Deadline: 2024-10-01T00:00:00.000Z',
    )
    expect(consoleSpy).toHaveBeenCalledWith('Message: You have a new task!')

    console.log('Notification sent successfully!', notificationDetails)

    // Clean up the mock
    consoleSpy.mockRestore()
  })

  it('should throw an error for invalid message types', () => {
    expect(() => {
      new NotificationSystem('This is a task!', 'invalidType' as keyof typeof messageTypes)
    }).toThrow('Invalid notification type: invalidType. Please provide a valid notification type.')
  })

  it('should throw an error if recipient is empty', () => {
    const invalidNotificationDetails = {
      recipient: '',
      taskTitle: 'Math Assignment',
      category: 'Math',
      taskType: 'Assignment',
      deadline: new Date('2024-10-01'),
    }

    expect(() => {
      notificationSystem.sendNotification(invalidNotificationDetails)
    }).toThrow('Recipient cannot be empty.')
  })

  it('should throw an error if task title is empty', () => {
    const invalidNotificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: '',
      category: 'Math',
      taskType: 'Assignment',
      deadline: new Date('2024-10-01'),
    }

    expect(() => {
      notificationSystem.sendNotification(invalidNotificationDetails)
    }).toThrow('Task title cannot be empty.')
  })

  it('should throw an error if category is empty', () => {
    const invalidNotificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: 'Math Assignment',
      category: '',
      taskType: 'Assignment',
      deadline: new Date('2024-10-01'),
    }

    expect(() => {
      notificationSystem.sendNotification(invalidNotificationDetails)
    }).toThrow('Category cannot be empty.')
  })

  it('should throw an error if task type is empty', () => {
    const invalidNotificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: 'Math Assignment',
      category: 'Math',
      taskType: '',
      deadline: new Date('2024-10-01'),
    }

    expect(() => {
      notificationSystem.sendNotification(invalidNotificationDetails)
    }).toThrow('Task type cannot be empty.')
  })

  it('should throw an error for invalid deadline', () => {
    const invalidNotificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: 'Math Assignment',
      category: 'Math',
      taskType: 'Assignment',
      deadline: new Date('invalid-date'),
    }

    expect(() => {
      notificationSystem.sendNotification(invalidNotificationDetails)
    }).toThrow('Invalid deadline. Please provide a valid date.')
  })
})
