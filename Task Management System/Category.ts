/** 
 * This file is responsible for handling the category.
 * @class Category
 * @param {string} name - The name of the category
 * @param {string} description - The description of the category
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
*/

export class Category {
  name: string;

  constructor(name: 'Math' | 'Science' | 'English' | 'History' | 'Geography' | 'Art' | 'Music' | 'Physical Education' | 'Technology' | 'Religion' | 'Social Studies') {
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}