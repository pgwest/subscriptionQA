import { Choice } from './choice';

export class Question {
  constructor(
    public id: number,
    public choices: Array<any>,
    public name: string,
    public completed: number,
    public isVisible: boolean,
    public isMultipleChoice: boolean,
    public uid: string
  ) { }
}
