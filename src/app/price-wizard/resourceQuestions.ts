import { Choice } from './choice';
import { Question } from './question';

export const resourceQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Yes, 1-5', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Yes >5', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'No', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Yes, Application Performance and UI/Ux', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}

      ],
      'name': 'Do you currently have QA?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': false,
      'uid': 'r1'
    },
    {
      'id': 2,
      'choices': [
          {"id": 0, "name": '0', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": '1-5', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": '6-10', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": '10-15', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 4, "name": '16-25', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 5, "name": '>26', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}

      ],
      'name': 'How many dev resources do you have?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': false,
      'uid': 'r2'
    },
    {
      'id': 3,
      'choices': [
          {"id": 0, "name": 'User Monitoring', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Performance Monitoring', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'Log Monitoring', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Crash Monitoring', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 4, "name": 'Other', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}
      ],
      'name': 'What monitoring tools do you use?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': true,
      'uid': 'r3'
    }
  ];
