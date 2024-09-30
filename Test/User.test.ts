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
    // Changed to before each
    user = new User('Paul', 'paul.1@student.lnu.se', 'student')
  })

  it('should generate an id when creating a new user', () => {
    expect(user.userId).toBeDefined()
    console.log('User id generated!', user.userId)
  })

  it('should create a new user and hash the password correctly', async () => {
    await user.createUser('mySecurePassword')

    // Check if the password is hashed
    const isPasswordCorrect = await user.checkPassword('mySecurePassword')
    expect(isPasswordCorrect).toBe(true)

    // If the password is incorrect
    const isPasswordIncorrect = await user.checkPassword('wrongPassword')
    expect(isPasswordIncorrect).toBe(false)

    console.log('The password is hashed correctly for', user.name)
  })

  it('should assign a role to the user', () => {
    user.assignRole('student')
    expect(user.role).toBe('student')
    console.log('User role assigned!', user.role)
  })
})
