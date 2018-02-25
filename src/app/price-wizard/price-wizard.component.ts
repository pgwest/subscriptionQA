import { Component, OnInit } from '@angular/core';

import { ServicesModule } from '../services/services.module';
import { choice } from './choice';
import { question } from './question';


@Component({
  selector: 'app-price-wizard',
  templateUrl: './price-wizard.component.html',
  styleUrls: ['./price-wizard.component.scss']
})
export class PriceWizardComponent implements OnInit {

  questions: question[] = [
      {
        'id': 1,
        'choices': [
            new choice(1, 'Quality Assurance', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', true),
            new choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
            new choice(1, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
        ],
        'name': 'Where can we help?',
        'completed': 10,
        'isVisible': false
      },
      {
        'id': 2,
        'choices': [
            new choice(1, 'Manual QA', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
            new choice(1, 'Automation QA', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', true),
            new choice(1, 'Monitoring', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false),
            new choice(1, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', true),
            new choice(1, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
            new choice(1, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', true)
        ],
        'name': 'What kind(s) of QA do you need?',
        'completed': 10,
        'isVisible': true
      },
      {
        'id': 2,
        'choices': [
            new choice(1, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
            new choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', true),
            new choice(1, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
            new choice(1, 'Regression', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
            new choice(1, 'Smoke', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
            new choice(1, 'Acceptance', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', true)
        ],
        'name': 'What platforms do you need?',
        'completed': 10,
        'isVisible': false
      }
    ];

  isSelected = true;

  constructor() {



  }

  ngOnInit() {
  }


    // public choices = choice[];
    // public questions: question[] = [
    //     {
    //       1,
    //       [
    //         new choice(1, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', true),
    //         new choice(1, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
    //         new choice(1, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
    //         new choice(1, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', true)
    //       ],
    //       'Where can we help?',
    //       10
    //     },
    //     {
    //       1,
    //       [
    //         new choice(1, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', true),
    //         new choice(1, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
    //         new choice(1, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
    //         new choice(1, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', true)
    //       ],
    //       'What kind(s) of QA do you need?',
    //       10
    //     },
    //     {
    //       1,
    //       [
    //         new choice(1, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', true),
    //         new choice(1, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
    //         new choice(1, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
    //         new choice(1, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
    //         new choice(1, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', true)
    //       ],
    //       'What platforms do you need tested?',
    //       10
    //     }
    //   ];


}
