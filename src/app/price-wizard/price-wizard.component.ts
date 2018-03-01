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
  myDevQuestions = devQuestions;
  myMonitoringQuestions = monitoringQuestions;
  isOurRecommendation : boolean;

  // resourceQuestions : resourceQuestions;
  // answers: Answer[];
  // answer: Answer;

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
      'isVisible': true,
      'isMultipleChoice': true
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
      'isVisible': false,
      'isMultipleChoice': false
    };


    constructor(private ref: ApplicationRef) {
      this.lastQuestionId = 5;

      this.expectedTotal = 100;
      this.completed = 0;
      this.isFirstQuestion = true;
      console.log("constructor called");
      this.lastQuestionId = -1;
      this.isLastQuestion = false;
      this.isFirstQuestion = true;
      this.expectedTotal = 100;
      this.qaSelected = false;
      this.devSelected = false;
      this.monitoringSelected = false;
      this.isResourceQuestion = false;
      this.isResourceQuestionNext = false;
      this.isResourceHelp  =false;
      this.isSelectResources = false;
      this.resourceLastQuestionId = resourceQuestions.length;
      this.isQuestions = false;
      this.isSelectNext = false;
      this.myResourceQuestions = resourceQuestions;
      this.myDevQuestions = devQuestions;
      this.myMonitoringQuestions = monitoringQuestions;
      this.questions = qaQuestions;
      this.completed = 0;
      this.isOurRecommendation = false;

    }

    ngOnInit() {
      // this.isFirstQuestion = true;
      // this.questions = qaQuestions;
      // this.resourceLastQuestionId = resourceQuestions.length;
      // console.log("init called");

    }

    toggleSelected(choice, question) {
      if(!choice.isSelected){
        if(!question.isMultipleChoice){
          for(var otherChoice in question.choices){
            question.choices[otherChoice].isSelected = false;
          }
        }
      }
      choice.isSelected = !choice.isSelected;

      if(question.id == 0 ){
        if (choice.id == 0){
          this.qaSelected = choice.isSelected;
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
      console.log("is first question!");
      if (!this.isFirstQuestion){
        this.questions[0].isVisible = true;
        // console.log("questions 0 is visible");
      }
      else {
        if (this.qaSelected) {
          // console.log("qaSelected");
          //devQuestions[0].isVisible = true;
        //  monitoringQuestions[0].isVisible = true;
          this.questions = qaQuestions;
          // console.log(qaQuestions);
          if(this.devSelected){
            this.myDevQuestions = devQuestions;
            this.myDevQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myDevQuestions);

            // this.updateIds();
          }
          if(this.monitoringSelected){
            this.myMonitoringQuestions = monitoringQuestions;
            this.myMonitoringQuestions[0].isVisible = false;
            // monitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myMonitoringQuestions);
            // this.questions[qaQuestions.length + devQuestions.length ].isVisible = false;
            // this.updateIds();

            // console.log(this.questions);
          }
          this.updateIds();

        }
        else if (this.devSelected) {
          // console.log("devSelected");
          // devQuestions[0].isVisible = true;
          this.myDevQuestions = devQuestions;
          this.questions = devQuestions;
          // console.log(this.questions);
          if(this.monitoringSelected){
            // monitoringQuestions[0].isVisible = false;
            this.myMonitoringQuestions = monitoringQuestions;
            this.myMonitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myMonitoringQuestions);
            // this.updateIds();

            // console.log(this.questions);
            // this.questions[devQuestions.length].isVisible = false;
          }
          this.updateIds();

        }
        else if (this.monitoringSelected) {
          // console.log("monitoringSelected");
          // monitoringQuestions[0].isVisible = true;

          this.questions = monitoringQuestions;
          this.updateIds();

          // console.log(this.questions);
        }
        if (!this.qaSelected && !this.devSelected && !this.monitoringSelected){
          console.log("nothing selected");
        }
        else {
          this.isQuestions = true;
          this.isFirstQuestion = !this.isFirstQuestion;
          // this.lastQuestionId = this.questions[this.questions.length-1].id;
          this.lastQuestionId = this.questions.length;
          this.expectedTotal = (this.lastQuestionId)*10;
          this.completed = 0;
          this.questions[0].isVisible = true;

        }
      }
    }

    nextQuestion(question) {
      // console.log("nextQuestion logs");
      // console.log(question);
      // console.log(this.questions);

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
      console.log("nextQuestionResources");
      if (question.id !== this.resourceLastQuestionId){
        question.isVisible = false;
        this.myResourceQuestions[question.id].isVisible = true;
        // this.completed += question.completed/this.expectedTotal*100;
      }
      if (question.id == this.resourceLastQuestionId-1){
        this.isSelectNext = true;

        console.log("is last resource question, select next true");
      }
      console.log("nextQuestionResources");
      console.log(question);
      console.log(question.id);
    }

    resourcesNextClicked(question) {
      if (!question.choices[0].isSelected && !question.choices[1].isSelected){
        console.log('nothing selected');
      }
      else {
        this.isResourceQuestion = false;
        // question.isVisible = false;
        if(question.choices[0].isSelected){
          console.log("first choice selected");
          this.myResourceQuestions = resourceQuestions;
          this.myResourceQuestions[0].isVisible = true;
          for ( var i = 1, len = this.myResourceQuestions.length; i < len; i++ )
          {
            this.myResourceQuestions[i].isVisible = false;
            // console.log("for loop");
            // console.log(this.questions[i]);
          }
          console.log(this.myResourceQuestions);
          this.isResourceHelp = true;
          this.isOurRecommendation = true;
        }
        else {
          console.log("second choice selected");
          this.isSelectResources = true;
        }
      }
    }

    resourcesBackClicked(question) {
        this.isResourceQuestion = false;
        this.isQuestions = true;
        this.questions[this.questions.length-1].isVisible = true;
        // this.isOurRecommendation = false;
    }

    nextResourceHelp(){
      //show select resources?
      this.isSelectResources = true;
      this.isResourceHelp = false;
    }

    previousQuestionResources(question){
      console.log("previousQuestionResources");
      question.isVisible = false;
      this.myResourceQuestions[question.id-2].isVisible = true;
      this.isSelectNext = false;
    }

    previousToResourceQuestion(question) {
      this.isResourceQuestion = true;
      this.isResourceHelp = false;
      this.isOurRecommendation = false;

    }

    resourcesSelected(){
      this.isLastQuestion = true;
      this.isSelectResources = false;

    }

    logger(question){
      console.log(question);
    }


    nextResources(question) {
      // console.log("ResourceQuestionNext clicked");
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
          this.isResourceQuestionNext = false;
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
      // console.log("ids updated");
      // console.log(this.questions);
    }

}
