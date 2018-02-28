import { Choice } from './choice';

export class Question {
  constructor(
    public id: number,
    public choices: Choice[],
    public name: string,
    public completed: number,
    public isVisible: boolean
  ) { }
}
