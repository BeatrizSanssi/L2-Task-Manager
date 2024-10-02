/**
 * This is a test file for the User class
 * @test UserTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { User } from '../Task Management System/User'

describe('User', () => {
  let user: User

  beforeEach(() => {
    user = new User('Paul Hanson', 'paul.hanson1@student.lnu.se', 'Student')
  })

  it('should generate an id when creating a new user', () => {
    expect(user.userId).toBeDefined()
    console.log('User id generated!', user.userId)
  })

  it('should create a new password and hash it correctly', async () => {
    await user.createPassword('mySecurePassword')

    // Check if the password is hashed
    const isPasswordCorrect = await user.checkPassword('mySecurePassword')
    expect(isPasswordCorrect).toBe(true)

    // If the password is incorrect
    const isPasswordIncorrect = await user.checkPassword('wrongPassword')
    expect(isPasswordIncorrect).toBe(false)

    console.log('The password is hashed correctly for', user.name)
  })

  it('should throw an error if the password is less than 8 characters', async () => {
    await expect(user.createPassword('short')).rejects.toThrow(
      'Password must be at least 8 characters long.',
    )
    console.log('Password validation works correctly!')
  })

  it('should assign a role to the user', () => {
    user.assignRole('Student')
    expect(user.role).toBe('Student')
    console.log('User role assigned!', user.role)
  })
})
