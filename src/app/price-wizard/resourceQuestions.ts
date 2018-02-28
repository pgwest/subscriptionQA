import { Choice } from './choice';
import { Question } from './question';

export const resourceQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          new Choice(0, 'I\'d like help deciding.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'I know what I want', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': 'How many QA resources do you have?',
      'completed': 10,
      'isVisible': true
    },
    {
      'id': 2,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': 'How many dev Resources have?',
      'completed': 10,
      'isVisible': false
    }
  ];
