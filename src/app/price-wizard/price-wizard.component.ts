import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ApplicationRef } from '@angular/core';
import {DecimalPipe} from '@angular/common';

import { ServicesModule } from '../services/services.module';
import { Choice } from './choice';
import { Question } from './question';
import { DashboardModule } from '../dashboard/dashboard.module';
import { Answer } from './answer';
// import { Answers } from './answers';
import { qaQuestions } from './qaQuestions';
import { devQuestions } from './devQuestions';
import { monitoringQuestions } from './monitoringQuestions';
// import { Answers } from './answers';


@Component({
  selector: 'app-price-wizard',
  templateUrl: './price-wizard.component.html',
  styleUrls: ['./price-wizard.component.scss']
})
export class PriceWizardComponent implements OnInit {

  lastQuestionId : number;
  completed : number;
  isLastQuesiton: false;
  isFirstQuestion: boolean;
  expectedTotal : number;
  qaSelected: boolean;
  devSelected: boolean;
  monitoringSelected: boolean;
  questions: Question[];
  // answers: Answer[];
  answer: Answer;

  firstQuestion : Question =
    {
      'id': 0,
      'choices': [
          new Choice(0, 'Quality Assurance', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
      ],
      'name': 'Where can we help?',
      'completed': 10,
      'isVisible': true
    };



    constructor(private ref: ApplicationRef) {
      this.lastQuestionId = 5;

      this.expectedTotal = 100;
      this.completed = 0;
      this.isFirstQuestion = true;

    }

    ngOnInit() {
      this.isFirstQuestion = true;
      this.questions = qaQuestions;

    }

    toggleSelected(choice, question) {
      choice.isSelected = !choice.isSelected;
      // this.answers = new Answer(question.id, question.name, choice.id, choice.name, choice.isselected);
      // console.log(question.id);
      if (question.id == 0 ){
        // this.answers = new Answer[0] = new Answer(-1,"",[-1],[""],false);

      }
      // this.answers[question.id] = new Answer(-1,"",[-1],[""],false);
      // this.answers[question.id].questionId = question.id;
      // this.answers[question.id].questionName = question.name;
      // this.answers[question.id].answerIds[choice.id] = choice.id;
      // this.answers[question.id].answerNames[choice.id] = choice.name;
      // this.answers[question.id].answerSelected = true;
      // this.answers[question.id][choice.id].answerSelected = choice.isSelected;

      // this.answers.push(this.answer);

      if(question.id == 0 ){
        if (choice.id == 0){
          this.qaSelected = choice.isSelected;
          // if(this.qaSelected){
          //
          // }
        }
        else if (choice.id == 1){
          this.devSelected = choice.isSelected;
        }
        else if (choice.id == 2){
          this.monitoringSelected = choice.isSelected;
        }
      }
    }

    firstQuestionNext() {
      if (!this.isFirstQuestion){
        this.questions[0].isVisible = true;
      }
      else {


        if (this.qaSelected) {
          console.log("qaSelected");

          console.log(qaQuestions);
          this.questions.concat(qaQuestions);
          console.log(this.questions);
        }
        if (this.devSelected) {
          console.log("devSelected");

          this.questions.concat(devQuestions);
          console.log(this.questions);
        }
        if (this.monitoringSelected) {
          console.log("monitoringSelected");

          this.questions = this.questions.concat(monitoringQuestions);
          console.log("monitoringQuestions");
          console.log(monitoringQuestions);
          console.log("questions");
          console.log(this.questions);
        }
        if (!this.qaSelected && !this.devSelected && !this.monitoringSelected){
          console.log("nothing selected");
        }
        else {
          this.isFirstQuestion = !this.isFirstQuestion;
          this.lastQuestionId = this.questions[this.questions.length-1].id;
          this.expectedTotal = (this.lastQuestionId)*10;
        }
      }
    }

    nextQuestion(question) {
      if (question.id !== this.lastQuestionId){
        question.isVisible = false;
      this.questions[question.id].isVisible = true;
      this.completed += question.completed/this.expectedTotal*100;

    }

    }

    previousQuestion(question) {
      if(question.id !== 1){
        question.isVisible = false;
      this.questions[question.id - 2].isVisible = true;
      this.completed -= question.completed/this.expectedTotal*100;
      }
      else {
        question.isVisible = false;
        this.firstQuestionNext();
      }

    }



    serviceSectionsByIdPrevious(question){
      if(question.id = 1 && !this.qaSelected){
        question.id = 4;
        if(question.id = 4 && !this.devSelected){
          question.id = 8;
          if(question.id = 8 && !this.monitoringSelected){
            question.id=1;
          }
        }
      }
      else if(question.id = 4 && !this.devSelected){
        question.id = 8;
        if(question.id = 8 && !this.monitoringSelected){
          question.id = 11;
        }
      }
      else if(question.id = 8 && !this.monitoringSelected){
        question.id = 11;
      }
    }


}
