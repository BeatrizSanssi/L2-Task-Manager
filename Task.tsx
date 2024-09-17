/** 
 * This file is responsible for handling the task.
 * @class Task
 * @param {string} title - The title of the task
 * @param {string} description - The description of the task
 * @param {string} status - The status of the task
 * @param {string} deadline - The deadline of the task
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

const task = [
  {assignment: 'assignment'},
  {test: 'test'},
  {project: 'project'},
  {groupProject: 'groupProject'},
]

const status = [
  {notStarted: 'notStarted'},
  {inProgress: 'inProgress'},
  {completed: 'completed'},
]

export class Task {
  title: string;
  description: string;
  status: string;
  deadline: string;

  constructor(title: string, description: string, status: string, deadline: string) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.deadline = deadline;
  }
}