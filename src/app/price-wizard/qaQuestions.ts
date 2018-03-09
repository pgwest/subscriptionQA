import { Choice } from './choice';
import { Question } from './question';

export const qaQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Yes, help me', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Maybe', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'No', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
      ],
      'name': 'Are you QA?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': true,
      'uid': 'a1'
    },
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Manual QA', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Automation QA', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'Exploratory', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Regression', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 4, "name": 'Smoke', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 5, "name": 'Acceptance', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
      ],
      'name': 'What kind(s) of QA do you need?',
      'completed': 10,
      'isVisible': false,
      'isMultipleChoice': true,
      'uid': 'a2'
    },
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Web', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'iOS', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'Android', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Linux', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 4, "name": 'Windows', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 5, "name": 'MacOS', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 6, "name": 'Other', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
      ],
      'name': 'What platforms do you need tested?',
      'completed': 10,
      'isVisible': false,
      'isMultipleChoice': true,
      'uid': 'a3'
    }

  ];
