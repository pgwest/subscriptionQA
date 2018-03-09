import { Choice } from './choice';
import { Question } from './question';

export const monitoringQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          {"id": 0, "name": 'Yes, UX/UI only', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Yes, Application Performance Only', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'No', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Yes, Application Performance and UI/Ux', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}

      ],
      'name': 'Are you monitoring?',
      'completed': 10,
      'isVisible': true,
      'isMultipleChoice': false,
      'uid': 'm1'
    },
    {
      'id': 2,
      'choices': [
          {"id": 0, "name": 'UX/UI or User Monitoring', "backgroundImage": 'assets/img/black.jpg', "icon" : '../../assets/img/qa-icon.png', "isSelected":false},
          {"id": 1, "name": 'Application Performance', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false},
          {"id": 2, "name": 'Implementation, UI/UX', "backgroundImage" : 'assets/img/black.jpg', "icon": '../../assets/img/monitoring-icon.png', "isSelected": false},
          {"id": 3, "name": 'Implementation, Application Performance', "backgroundImage" : 'assets/img/black.jpg', "icon" : '../../assets/img/dev-icon.png', "isSelected": false}

      ],
      'name': 'How can we help?',
      'completed': 10,
      'isVisible': false,
      'isMultipleChoice': true,
      'uid': 'm2'
    }
  ];
