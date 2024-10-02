'use strict'
/**
 * This is a test file for the NotificationSystem class.
 * @test NotificationSystemTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, '__esModule', { value: true })
const NotificationSystem_1 = require('../src/NotificationSystem')
describe('NotificationSystem', () => {
  let notificationSystem
  beforeEach(() => {
    // Create a new notification system before each test
    notificationSystem = new NotificationSystem_1.NotificationSystem('newTask')
  })
  it('should create a notification system with valid message and type', () => {
    expect(notificationSystem.message).toBe(
      'A new task has been assigned to you.',
    )
    expect(notificationSystem.type).toBe('newTask')
    console.log('NotificationSystem created successfully!', notificationSystem)
  })
  it('should send a notification with correct details', () => {
    const notificationDetails = {
      recipient: 'Paul Hanson',
      taskTitle: 'Math Assignment',
      category: 'Math',
      taskType: 'Assignment',
      deadline: new Date('2024-11-01'),
      createdAt: new Date('2024-10-01'),
    }
    notificationSystem.sendNotification(notificationDetails)
    expect(notificationSystem.message).toBe(
      'A new task has been assigned to you.',
    )
    console.log('Notification sent successfully!', notificationDetails)
  })
  it('should throw an error for invalid message types', () => {
    expect(() => {
      new NotificationSystem_1.NotificationSystem('invalidType')
    }).toThrow('Invalid notification type: invalidType.')
    console.log('Error thrown for invalid message type')
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
//# sourceMappingURL=NotificationSystem.test.js.map
