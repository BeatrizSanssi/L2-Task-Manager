/**
 * This is a test file for the Category class.
 * @test CategoryTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Category } from '../Task Management System/Category'

describe('Category', () => {
  let category: Category

  beforeEach(() => {
    // Create a new category before each test
    category = new Category('Math')
  })

  it('should create a category with a valid name', () => {
    expect(category.name).toBe('Math')
    console.log('Category created successfully!', category)
  })

  it('should return the correct name when calling toString', () => {
    expect(category.toString()).toBe('Math')
    console.log('Category toString works correctly!', category.toString())
  })
})
