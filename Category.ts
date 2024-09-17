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
  name: 'math' | 'science' | 'english' | 'history' | 'geography' | 'art' | 'music' | 'physicalEducation' | 'technology' | 'religion' | 'socialStudies';
  description: string;

  constructor(name: string, description: string) {
    this.name = name as 'math' | 'science' | 'english' | 'history' | 'geography' | 'art' | 'music' | 'physicalEducation' | 'technology' | 'religion' | 'socialStudies';
    this.description = description;
  }
}
