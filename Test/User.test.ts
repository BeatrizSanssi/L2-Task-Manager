/**
 * This is a test file for the User class
 * @test UserTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { User } from '../src/User'

describe('User', () => {
  let user: User

  beforeEach(() => {
    user = new User(
      'id2001',
      'Paul',
      'Hanson',
      'paul.hanson1@student.lnu.se',
      'Student',
    )
  })

  it('should generate an id when creating a new user', () => {
    expect(user.userId).toBeDefined()
    console.log('User id generated!', user.userId)
  })

  it('should set a new password', async () => {
    await user.setPassword('setMyPassword')

    // Check if the password is correct
    const isPasswordCorrect = await user.checkPassword('setMyPassword')
    expect(isPasswordCorrect).toBe(true)

    // If the password is incorrect
    const isPasswordIncorrect = await user.checkPassword('wrongPassword')
    expect(isPasswordIncorrect).toBe(false)

    console.log(
      'The password is hashed correctly for',
      user.first_name + ' ' + user.last_name,
    )
  })

  it('should throw an error if the password is less than 8 characters', async () => {
    await expect(user.setPassword('short')).rejects.toThrow(
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
