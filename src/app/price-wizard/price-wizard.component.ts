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
import { resourceQuestions } from './resourceQuestions';

// import { Answers } from './answers';


@Component({
  selector: 'app-price-wizard',
  templateUrl: './price-wizard.component.html',
  styleUrls: ['./price-wizard.component.scss']
})
export class PriceWizardComponent implements OnInit {

  lastQuestionId : number;
  completed : number;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
  expectedTotal : number;
  qaSelected: boolean;
  devSelected: boolean;
  monitoringSelected: boolean;
  questions: Question[];
  isResourceQuestion: boolean;
  isResourceQuestionNext: boolean;
  isResourceHelp : boolean;
  isSelectResources : boolean;
  resourceLastQuestionId : number;
  isQuestions : boolean;
  isSelectNext: boolean;
  myResourceQuestions = resourceQuestions;

  // resourceQuestions : resourceQuestions;
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

    resourcesQuestion : Question =
    {
      'id': 12,
      'choices': [
          new Choice(0, 'Help me choose.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'I know what I need.', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
            ],
      'name': "How many resources do you need?",
      'completed': 10,
      'isVisible': false
    };


    constructor(private ref: ApplicationRef) {
      this.lastQuestionId = 5;

      this.expectedTotal = 100;
      this.completed = 0;
      this.isFirstQuestion = true;
      console.log("constructor called");
    }

    ngOnInit() {
      this.isFirstQuestion = true;
      this.questions = qaQuestions;
      this.resourceLastQuestionId = resourceQuestions.length;
      console.log("init called");

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
      this.isQuestions = true;
      if (!this.isFirstQuestion){
        this.questions[0].isVisible = true;
        console.log("questions 0 is visible");
      }
      else {
        if (this.qaSelected) {
          // console.log("qaSelected");
          devQuestions[0].isVisible = true;
          monitoringQuestions[0].isVisible = true;
          this.questions = qaQuestions;
          // console.log(qaQuestions);
          if(this.devSelected){
            devQuestions[0].isVisible = false;
            this.questions = this.questions.concat(devQuestions);

            this.updateIds();
          }
          if(this.monitoringSelected){
            monitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(monitoringQuestions);
            // this.questions[qaQuestions.length + devQuestions.length ].isVisible = false;
            this.updateIds();

            // console.log(this.questions);
          }
        }
        else if (this.devSelected) {
          // console.log("devSelected");
          devQuestions[0].isVisible = true;
          this.questions = devQuestions;
          // console.log(this.questions);
          if(this.monitoringSelected){
            monitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(monitoringQuestions);
            this.updateIds();

            // console.log(this.questions);
            // this.questions[devQuestions.length].isVisible = false;
          }
        }
        else if (this.monitoringSelected) {
          // console.log("monitoringSelected");
          monitoringQuestions[0].isVisible = true;

          this.questions = monitoringQuestions;
          // console.log(this.questions);
        }
        if (!this.qaSelected && !this.devSelected && !this.monitoringSelected){
          console.log("nothing selected");
        }
        else {
          this.isFirstQuestion = !this.isFirstQuestion;
          // this.lastQuestionId = this.questions[this.questions.length-1].id;
          this.lastQuestionId = this.questions.length;
          this.expectedTotal = (this.lastQuestionId)*10;
          this.questions[0].isVisible = true;

        }
      }
    }

    nextQuestion(question) {
      if (question.id !== this.lastQuestionId){
        question.isVisible = false;
        this.questions[question.id].isVisible = true;
        this.completed += question.completed/this.expectedTotal*100;
      }
      if (question.id == this.lastQuestionId - 1){
        this.isResourceQuestionNext = true;
        // this.isQuestions = false;
      }

    }

    nextQuestionResources(question) {
      if (question.id !== this.resourceLastQuestionId){
        question.isVisible = false;
        this.myResourceQuestions[question.id].isVisible = true;
        // this.completed += question.completed/this.expectedTotal*100;
      }
      if (question.id == this.resourceLastQuestionId-1){
        this.isSelectNext = true;
        console.log("is last resource question, select next true");
      }
      console.log(question);
      console.log(question.id);
    }

    resourcesNextClicked(question) {
      if (!question.choices[0].isSelected && !question.choices[1].isSelected){
        console.log('nothing selected');
      }
      else {
        this.isResourceQuestion = false;
        question.isVisible = false;
        if(question.choices[0].isSelected){
          console.log("first choice selected");
          // this.resourceQuestions = resourceQuestions;
          console.log(this.myResourceQuestions);
          this.isResourceHelp = true;
        }
        else {
          console.log("first choice selected");
          this.isSelectResources = true;
        }
      }
    }

    nextResourceHelp(){
      //show select resources?
      this.isSelectResources = true;
      this.isResourceHelp = false;
    }

    resourcesSelected(){
      this.isLastQuestion = true;
      this.isSelectResources = false;

    }

    logger(question){
      console.log(question);
    }


    nextResources(question) {
      console.log("ResourceQuestionNext clicked");
      this.isResourceQuestion = true;
      question.isVisible = false;
      // this.questions[question.id].isVisible = true;
      this.completed += question.completed/this.expectedTotal*100;
      this.isQuestions = false;
    }

    previousQuestion(question) {
      if(question.id !== 1){
        if(question){
          question.isVisible = false;
          this.questions[question.id - 2].isVisible = true;
        }
        else {
          console.log("no question found");
        }
      this.completed -= question.completed/this.expectedTotal*100;
      // this.isQuestions = true;
      }
      else {
        if(question){
          question.isVisible = false;
        }
        else {
          console.log("no question found 1");
        }
        this.isFirstQuestion = !this.isFirstQuestion;
        console.log("first question true?");
        console.log(this.isFirstQuestion);
        this.questions = qaQuestions;
        this.isQuestions = false;

        // this.firstQuestionNext();
      }

    }

    lastQuestion(){
        console.log("last question");
    }


    updateIds(){
      for ( var i = 0, len = this.questions.length; i < len; i++ )
      {
        this.questions[i].id = i+1;
      }
      console.log(this.questions);
    }

}
