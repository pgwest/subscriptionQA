import { Choice } from './choice';
import { Question } from './question';

export const devQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Heck Yeah!', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Outsourced or Third Party', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'No', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
      ],
      'name': 'Are you dev?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': false,
      'uid': 'd1'
    },
    {
      'id': 2,
      'choices': [
          {"id": 0, "name": 'Web', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'iOS', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'Android', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Linux', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 4, "name": 'Windows', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 5, "name": 'MacOS', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 6, "name": 'Other', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false}
      ],
      'name': 'What kind(s) of dev do you need?',
      'completed': 10,
      'isVisible': false,
      'isMultipleChoice': true,
      'uid': 'd2'
    }
  ];
