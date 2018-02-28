
export class Answer {
  constructor(
    public questionId: number,
    public questionName: string,
    public answerIds: number[],
    public answerNames: string[],
    public answerSelected: boolean
  ) { }
}
