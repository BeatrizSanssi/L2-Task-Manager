/** 
 * The Category class
 * @class Category
 * @param {string} name - The name of the category
 * @param {string} description - The description of the category
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 *
*/

const category = [
  {math: 'math'},
  {science: 'science'},
  {english: 'english'},
  {history: 'history'},
  {geography: 'geography'},
  {art: 'art'},
  {music: 'music'},
  {physicalEducation: 'physicalEducation'},
  {technology: 'technology'},
  {religion: 'religion'},
  {socialStudies: 'socialStudies'},
]

export class Category {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
