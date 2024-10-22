/**
 * This is a test file for the Grade class.
 * @test CategoryTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Grade } from '../src/Grade'

describe('Grade', () => {
  let grade: Grade

  beforeEach(() => {
    // Create a new grade before each test
    grade = new Grade('C')
  })

  it('should create a grade with a valid value', () => {
    expect(grade.value).toBe('C')
    console.log('Grade created successfully!', grade)
  })

  it('should return the correct value when calling toString', () => {
    expect(grade.toString()).toBe('C')
    console.log('Grade toString works correctly!', grade.toString())
  })

  it('should update the grade value to a valid value', () => {
    grade.setGradeValue('B')
    expect(grade.value).toBe('B')
    console.log('Grade value updated successfully to B', grade)
  })

  it('should throw an error when trying to create an invalid grade', () => {
    expect(() => {
      new Grade('InvalidGrade')
    }).toThrow('Invalid grade value.')
  })

  it('should throw an error when creating a grade with an empty value', () => {
    expect(() => {
      new Grade('')
    }).toThrow('Grade value cannot be empty.')
  })
})
