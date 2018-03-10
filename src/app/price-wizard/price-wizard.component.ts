import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ApplicationRef } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Router } from '@angular/router';


import { ServicesModule } from '../services/services.module';
import { Choice } from './choice';
import { Question } from './question';
import { DashboardModule } from '../dashboard/dashboard.module';
import { Answer } from './answer';
import { qaQuestions } from './qaQuestions';
import { devQuestions } from './devQuestions';
import { monitoringQuestions } from './monitoringQuestions';
import { resourceQuestions } from './resourceQuestions';

import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//Services
import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';
import { SessionService } from '../session-service.service';


@Component({
  selector: 'app-price-wizard',
  templateUrl: './price-wizard.component.html',
  styleUrls: ['./price-wizard.component.scss']
})
export class PriceWizardComponent implements OnInit {

  lastQuestionId : number;
  completed : number;
  completedSoFar: number;
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
  myQaQuestions = qaQuestions;
  myResourceQuestions = resourceQuestions;
  myDevQuestions = devQuestions;
  myMonitoringQuestions = monitoringQuestions;
  isOurRecommendation : boolean;

  private modalRef: NgbModalRef;
  showAlert : boolean;
  showAlertLogin : boolean;
  loginAlertMessage : string;
  loginSuccess : boolean;

  disabled: boolean = false;
  singleSlider = 0;

  monitoringResources : number;
  devResources : number;
  qaResources : number;
  monitoringSlider : number;
  devSlider : number;
  qaSlider : number;

  closeResult : string;
  email: string;
  password: string;

  loggedIn : boolean;
  resourceChangeAlert : boolean;

  questionsToBeSaved: Question[] = [];


    // resourceQuestions : resourceQuestions;
  // answers: Answer[];
  // answer: Answer;

  firstQuestion : Question =
  {
    'id': 0,
    'choices': [
        {"id": 0, "name": 'Quality Assurance', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
        {"id": 1, "name": 'Software Development', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
        {"id": 2, "name": 'Monitoring', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
    ],
    'name': 'Where can we help?',
    'completed': 10,
    'isVisible': true,
    'isMultipleChoice': true,
    'uid': 'f1'
  };
    // {
    //   'id': 0,
    //   'choices': [
    //       new Choice(0, 'Quality Assurance', '', '../../assets/img/qa-icon.png', false),
    //       new Choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
    //       new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
    //   ],
    //   'name': 'Where can we help?',
    //   'completed': 10,
    //   'isVisible': true,
    //   'isMultipleChoice': true,
    //   'uid': 'f1'
    // };

    resourcesQuestion : Question =
    {
      'id': 12,
      'choices': [
          {"id": 0, "name": 'Help me choose', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'I know what I need', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}
      ],
      'name': 'How many resources do you need?',
      'completed': 10,
      'isVisible': false,
      'isMultipleChoice': false,
      'uid': 'rq1'
    };
    // {
    //   'id': 12,
    //   'choices': [
    //       new Choice(0, 'Help me choose.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
    //       new Choice(1, 'I know what I need.', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
    //         ],
    //   'name': "How many resources do you need?",
    //   'completed': 10,
    //   'isVisible': false,
    //   'isMultipleChoice': false,
    //   'uid': 'rq1'
    // };


    constructor(private router : Router, private ref: ApplicationRef, private data : DataService, private modalService: NgbModal,  public authService: AuthService, private sessionService: SessionService) {

      this.monitoringSlider = 0;
      this.devSlider = 0;
      this.qaSlider = 0;
      this.lastQuestionId = 5;

      this.resourceChangeAlert = false;
      this.loginSuccess = false;

      this.expectedTotal = 100;
      this.completed = 0;
      this.completedSoFar = 0;
      this.data.changeCompleted(this.completed);
      this.isFirstQuestion = true;
      this.lastQuestionId = -1;
      this.isLastQuestion = false;
      this.isFirstQuestion = true;
      this.expectedTotal = 100;

      this.isResourceQuestion = false;
      this.isResourceQuestionNext = false;
      this.isResourceHelp  =false;
      this.isSelectResources = false;
      this.resourceLastQuestionId = resourceQuestions.length;
      this.isQuestions = false;
      this.isSelectNext = false;
      this.myQaQuestions = qaQuestions;
      this.myResourceQuestions = resourceQuestions;
      this.myDevQuestions = devQuestions;
      this.myMonitoringQuestions = monitoringQuestions;
      this.questions = qaQuestions;
      this.isOurRecommendation = false;
      this.showAlert = false;
      this.showAlertLogin = false;
      this.loggedIn = false;

      if(this.questionsToBeSaved.length == 0){
        // console.log("no user");
        this.questionsToBeSaved.push(this.firstQuestion);
        // this.data.changeQuestions(this.questionsToBeSaved);
      }
      else{
        // console.log("user");
        // console.log(this.questionsToBeSaved);

      }

      this.qaSelected = false;
      this.devSelected = false;
      this.monitoringSelected = false;
    }

    ngOnInit() {

      this.data.currentQa.subscribe(qaResources => {this.qaResources = qaResources; this.setFirstQuestion();});
      this.data.currentDev.subscribe(devResources => {this.devResources = devResources; this.setFirstQuestion();});
      this.data.currentMonitoring.subscribe(monitoringResources => {this.monitoringResources = monitoringResources; this.setFirstQuestion();});
      this.data.currentCompleted.subscribe(percentageCompleted => this.completed = percentageCompleted);

      this.data.currentLoginFailure.subscribe(loginFailure => this.showAlertLogin = loginFailure);
      this.data.currentLoginAlertMessage.subscribe(loginAlertMessage => this.loginAlertMessage = loginAlertMessage);

      this.data.currentLoginSuccess.subscribe(loginSuccess => this.loginSuccess = loginSuccess);

      // this.data.currentQuestions.subscribe(questions => {this.questions = questions;});
      this.data.currentQaQuestions.subscribe(qaQuestions => {this.myQaQuestions = qaQuestions;});
      this.data.currentDevQuestions.subscribe(devQuestions => {this.myDevQuestions = devQuestions;});
      this.data.currentMonitoringQuestions.subscribe(monitoringQuestions => {this.myMonitoringQuestions = monitoringQuestions;});
      this.data.currentResourceQuestions.subscribe(resourceQuestions => {this.myResourceQuestions = resourceQuestions;});
      this.data.currentLoggedIn.subscribe(loggedIn => this.loggedIn = loggedIn);

      // this.data.currentQuestions.subscribe(questions => {this.questionsToBeSaved = questions; this.setFirstQuestion(); console.log(this.questionsToBeSaved);});
      this.data.currentQuestions.subscribe(questions => {this.questionsToBeSaved = questions; this.setFirstQuestion();});

      this.monitoringSlider = this.monitoringResources;
      this.devSlider = this.devResources;
      this.qaSlider = this.qaResources;
      // console.log(this.qaResources);
      // console.log("init called");

    }




    toggleSelected(choice, question) {

      this.showAlert = false;
      if(!choice.isSelected){
        if(!question.isMultipleChoice){
          for(var otherChoice in question.choices){
            question.choices[otherChoice].isSelected = false;
          }
        }
      }
      // console.log(question);
      choice.isSelected = !choice.isSelected;

      if(this.questionsToBeSaved){
        var questionIndex = this.questionsToBeSaved.findIndex(e => e.uid == question.uid);
      }
      else{
        var questionIndex = -1;
        this.questionsToBeSaved = [];
      }

      if(questionIndex != -1){
        var choiceIndex = this.questionsToBeSaved[questionIndex].choices.findIndex(e => e.name == choice.name);
        if(choiceIndex != -1){
          this.questionsToBeSaved[questionIndex].choices[choiceIndex].isSelected = choice.isSelected;
          this.questionsToBeSaved[questionIndex].name = question.name;
          this.questionsToBeSaved[questionIndex].isMultipleChoice = question.isMultipleChoice;

        }
        else {
          this.questionsToBeSaved[questionIndex].choices.push(Object.assign({}, choice));
        }
      }
      else {
        this.questionsToBeSaved.push(question);
      }

      this.data.changeQuestions(this.questionsToBeSaved);
      console.log(this.questionsToBeSaved);
      if(question.id == 0 ){
        if (choice.id == 0){
          this.qaSelected = choice.isSelected;
          if(!this.qaSelected){
            this.data.changeQaResources(0);
          } else if (this.qaResources == 0){
            this.data.changeQaResources(2);
          }
        }
        else if (choice.id == 1){
          this.devSelected = choice.isSelected;
          if(!this.devSelected){
            this.data.changeDevResources(0);
          } else if (this.devResources == 0){
            this.data.changeDevResources(2);
          }
        }
        else if (choice.id == 2){
          this.monitoringSelected = choice.isSelected;
          if(!this.monitoringSelected){
            this.data.changeMonitoringResources(0);
          } else if (this.monitoringResources == 0){
            this.data.changeMonitoringResources(2);
          }
        }
      }
    }

    setFirstQuestion() {
      if(this.firstQuestion.choices[0].isSelected){
        this.qaSelected = true;
      }
      if(this.firstQuestion.choices[1].isSelected){
        this.devSelected = true;
      }
      if(this.firstQuestion.choices[2].isSelected){
        this.monitoringSelected = true;
      }
      if(this.questionsToBeSaved){
        var questionIndex = this.questionsToBeSaved.findIndex(e => e.uid == this.firstQuestion.uid);
        if(questionIndex != -1){
          this.firstQuestion = this.questionsToBeSaved[questionIndex];
        }
      }
    }

    firstQuestionNext() {
      // console.log("is first question!");

      if (!this.isFirstQuestion){
        this.questions[0].isVisible = true;
        // console.log("questions 0 is visible");
      }
      else {
        if(!this.authService.user){
          this.data.changeQaResources(2);
          this.data.changeMonitoringResources(0);
          this.data.changeDevResources(0);
        }
        else{
          this.setFirstQuestion();
          // this.firstQuestion = questionsToBeSaved[0];
        }
        if (this.qaSelected) {
          // console.log("qaSelected");
          //devQuestions[0].isVisible = true;
        //  monitoringQuestions[0].isVisible = true;
          this.questions = this.myQaQuestions;
          // console.log(this.questions);
          // console.log(this.myQaQuestions);

          // console.log(qaQuestions);
          if(this.devSelected){
            // this.myDevQuestions = devQuestions;
            this.myDevQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myDevQuestions);
            // this.data.changeDevResources(2);

            // this.updateIds();
          }
          if(this.monitoringSelected){
            // this.myMonitoringQuestions = monitoringQuestions;
            this.myMonitoringQuestions[0].isVisible = false;
            // monitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myMonitoringQuestions);
            // this.data.changeMonitoringResources(2);

            // this.questions[qaQuestions.length + devQuestions.length ].isVisible = false;
            // this.updateIds();

            // console.log(this.questions);
          }
          this.updateIds();

        }
        else if (this.devSelected) {
          // console.log("devSelected");
          // devQuestions[0].isVisible = true;
          this.data.changeQaResources(0);
          this.data.changeDevResources(2);
          this.data.changeMonitoringResources(0);

          // this.myDevQuestions = devQuestions;
          this.questions = this.myDevQuestions;
          // console.log(this.questions);
          if(this.monitoringSelected){
            // monitoringQuestions[0].isVisible = false;
            // this.myMonitoringQuestions = monitoringQuestions;
            this.myMonitoringQuestions[0].isVisible = false;
            this.questions = this.questions.concat(this.myMonitoringQuestions);
            // this.updateIds();
            this.data.changeMonitoringResources(2);

            // console.log(this.questions);
            // this.questions[devQuestions.length].isVisible = false;
          }
          this.updateIds();

        }
        else if (this.monitoringSelected) {
          // console.log("monitoringSelected");
          // monitoringQuestions[0].isVisible = true;
          this.data.changeQaResources(0);
          this.data.changeMonitoringResources(2);

          this.questions = this.myMonitoringQuestions;
          this.updateIds();

          // console.log(this.questions);
        }
        if (!this.qaSelected && !this.devSelected && !this.monitoringSelected){
          // console.log("nothing selected");
          this.showAlert = true;
        }
        else {
          this.isQuestions = true;
          this.isFirstQuestion = !this.isFirstQuestion;
          // this.lastQuestionId = this.questions[this.questions.length-1].id;
          this.lastQuestionId = this.questions.length;
          this.expectedTotal = (this.lastQuestionId)*10 + 20;
          this.completedSoFar = 10;
          this.completed = this.completedSoFar/this.expectedTotal*100;
          this.data.changeCompleted(this.completed);
          this.questions[0].isVisible = true;
          // if(!this.qaSelected){
          //   if(this.qaResources>0){
          //     this.resourceChangeAlert = true;
          //   }
          //   else{
          //     this.resourceChangeAlert = false;
          //   }
          // }
          // if(!this.devSelected){
          //   if(this.devResources>0){
          //     this.resourceChangeAlert = true;
          //   }
          //   else{
          //     this.resourceChangeAlert = false;
          //   }
          // }
          // if(!this.monitoringSelected){
          //   if(this.monitoringResources>0){
          //     this.resourceChangeAlert = true;
          //   }
          //   else{
          //     this.resourceChangeAlert = false;
          //   }
          // }
          // if(!this.qaSelected){
          //   this.data.changeQaResources(0);
          // }
          // if(!this.devSelected){
          //   this.data.changeDevResources(0);
          // }
          // if(!this.monitoringSelected){
          //   this.data.changeMonitoringResources(0);
          // }

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
        this.completedSoFar += 10;
        this.completed = this.completedSoFar/this.expectedTotal*100;
        this.data.changeCompleted(this.completed);
        // console.log("this.completed");
        // console.log(this.completed);
      }
      if (question.id == this.lastQuestionId - 1){
        this.isResourceQuestionNext = true;
        // this.isQuestions = false;
      }

    }

    nextQuestionResources(question) {
      // console.log("nextQuestionResources");
      if (question.id !== this.resourceLastQuestionId){
        question.isVisible = false;
        this.myResourceQuestions[question.id].isVisible = true;
        // this.completed += question.completed/this.expectedTotal*100;
      }
      if (question.id == this.resourceLastQuestionId-1){
        this.isSelectNext = true;

        // console.log("is last resource question, select next true");
      }
      this.completedSoFar += 10;
      this.completed = this.completedSoFar/this.expectedTotal*100;
      this.data.changeCompleted(this.completed);


      // console.log("nextQuestionResources");
      // console.log(question);
      // console.log(question.id);
    }

    resourcesNextClicked(question) {
      this.monitoringSlider = this.monitoringResources;
      this.devSlider = this.devResources;
      this.qaSlider = this.qaResources;
      if (!question.choices[0].isSelected && !question.choices[1].isSelected){
        // console.log('nothing selected');
        this.showAlert = true;
      }
      else {
        this.isResourceQuestion = false;
        // question.isVisible = false;
        if(question.choices[0].isSelected){
          // console.log("first choice selected");
          this.expectedTotal += this.myResourceQuestions.length*10;

          this.myResourceQuestions = resourceQuestions;
          this.myResourceQuestions[0].isVisible = true;
          for ( var i = 1, len = this.myResourceQuestions.length; i < len; i++ )
          {
            this.myResourceQuestions[i].isVisible = false;
            // console.log("for loop");
            // console.log(this.questions[i]);
          }
          // console.log(this.myResourceQuestions);
          this.isResourceHelp = true;
          this.isOurRecommendation = true;
        }
        else {
          // console.log("second choice selected");
          this.isSelectResources = true;
        }

              this.completedSoFar += 10;
              this.completed = this.completedSoFar/this.expectedTotal*100;
              this.data.changeCompleted(this.completed);
      }



    }

    resourcesBackClicked(question) {
        this.isResourceQuestion = false;
        this.isQuestions = true;
        this.questions[this.questions.length-1].isVisible = true;
        this.completedSoFar -= 10;
        this.completed = this.completedSoFar/this.expectedTotal*100;
        this.data.changeCompleted(this.completed);
        this.expectedTotal -= this.myResourceQuestions.length*10;



        // this.isOurRecommendation = false;
    }

    nextResourceHelp(){
      //show select resources
      console.log("nextResourcehelp");
      this.completedSoFar += 10;
      this.completed = this.completedSoFar/this.expectedTotal*100;
      this.data.changeCompleted(this.completed);
      this.isSelectResources = true;
      this.isResourceHelp = false;
    }

    previousQuestionResources(question){
      // console.log("previousQuestionResources");
      question.isVisible = false;
      this.myResourceQuestions[question.id-2].isVisible = true;
      this.isSelectNext = false;
      this.completedSoFar -= 10;
      this.completed = this.completedSoFar/this.expectedTotal*100;
      this.data.changeCompleted(this.completed);

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
      // console.log(question);
    }


    nextResources(question) {
      // console.log("ResourceQuestionNext clicked");
      this.isResourceQuestion = true;
      question.isVisible = false;
      // this.questions[question.id].isVisible = true;
      this.completedSoFar += 10;
      this.completed = this.completedSoFar/this.expectedTotal*100;
      this.data.changeCompleted(this.completed);

      this.isQuestions = false;
      // console.log(this.completed);
    }

    previousQuestion(question) {
      if(question.id !== 1){
        if(question){
          question.isVisible = false;
          this.questions[question.id - 2].isVisible = true;
          this.isResourceQuestionNext = false;
        }
        else {
          // console.log("no question found");
        }
        this.completedSoFar -= 10;
        this.completed = this.completedSoFar/this.expectedTotal*100;
        this.data.changeCompleted(this.completed);

      // this.isQuestions = true;
      }
      else {
        if(question){
          question.isVisible = false;
        }
        else {
          // console.log("no question found 1");
        }
        this.isFirstQuestion = !this.isFirstQuestion;
        // console.log("first question true?");
        // console.log(this.isFirstQuestion);
        this.questions = qaQuestions;
        this.isQuestions = false;

        // this.firstQuestionNext();
      }

    }

    goToLastQuestion() {
      // console.log("ResourceQuestionNext clicked");
      this.isResourceQuestion = false;
      this.isSelectResources = false;
      this.isLastQuestion = true;
      // this.questions[question.id].isVisible = true;
      this.completedSoFar += 10;
      this.completed = 100;
      this.data.changeCompleted(this.completed);

      // console.log(this.completed);
    }

    onChangeSliderQa($event){
      // this.monitoringResources = $event;
      this.data.changeQaResources($event);
    }

    onChangeSliderDev($event){
      // this.devResources = $event;
      this.data.changeDevResources($event);

    }

    onChangeSliderMonitoring($event){
      // this.qaResources = $event;
      this.data.changeMonitoringResources($event);

    }

    lastQuestion(){
        console.log("last question");
    }

    open(content, type) {
        this.modalRef = this.modalService.open(content);
        // this.modalref.result((result)) => {
        //   this.closeResu
        // }

        // if (type === 'sm') {
        //     console.log('aici');
        //     this.modalRef = this.modalService.open(content, { size: 'sm' }).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // } else {
        //     this.modalRef = this.modalService.open(content).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    updateIds(){
      for ( var i = 0, len = this.questions.length; i < len; i++ )
      {
        this.questions[i].id = i+1;
      }
      // console.log("ids updated");
      // console.log(this.questions);
    }

    save(){
      // console.log("save");
      // this.data.changeQuestions(this.questionsToBeSaved);
      this.authService.updateUserData();
    }

    viewDashboard(){
      // console.log("view dashboard");
      this.router.navigate(['./dashboard']);
    }


    signup() {

      this.authService.signup(this.email, this.password);
      this.email = this.password = '';
      // console.log(this.loginSuccess);
      if(this.loginSuccess){
        // console.log("successful login, modal to be dismissed");
        this.modalRef.close();
      }


    }


}
