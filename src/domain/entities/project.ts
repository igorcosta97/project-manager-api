import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;

  constructor(id: number, name: string, description: string, tasks: ITask[], user: IUser) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.user = user;
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  getTask(taskId: number): ITask | undefined {
    return this.tasks.find(task => task.id === taskId);
  }
}
