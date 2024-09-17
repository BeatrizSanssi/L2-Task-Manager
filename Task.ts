/** 
 * This file is responsible for handling the task.
 * @class Task
 * @param {string} id - The id of the task
 * @param {string} author - The author of the task
 * @param {string} type - The type of the task
 * @param {string} title - The title of the task
 * @param {string} description - The description of the task
 * @param {string} status - The status of the task
 * @param {string} deadline - The deadline of the task
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

export class Task {
  id: string;
  author: string;
  type: 'Assignment' | 'Test' | 'Project' | 'Group project';
  title: string;
  description: string;
  status: 'not started' | 'in progress' | 'completed';
  deadline: Date;

  constructor(id: string, author: string, title: string, description: string, status: string, deadline: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.description = description;
    this.status = status as 'not started' | 'in progress' | 'completed';
    this.deadline = new Date(deadline);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  assignTask(author: string, user: string): void {
    this.author = author;
  }

  markAsCompleted(): void {
    this.status = 'completed';
  }

  markAsInProgress(): void {
    this.status = 'in progress';
  }

  markAsNotStarted(): void {
    this.status = 'not started';
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  updateDeadline(newDeadline: string): void {
    this.deadline = new Date(newDeadline);
  }

  toString(): string {
    return `Task: ${this.title} - ${this.description} - ${this.status} - ${this.deadline}`;
  }
}