import { choice } from './choice';

export class question {
  constructor(
    public id: number,
    public choices: choice[],
    public name: string,
    public completed: number,
    public isVisible: boolean
  ) { }
}
