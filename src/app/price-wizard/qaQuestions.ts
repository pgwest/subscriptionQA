import { Choice } from './choice';
import { Question } from './question';

export const qaQuestions: Question[] = [
    {
      'id': 1,
      'choices': [
          new Choice(0, 'Quality Assurance', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
      ],
      'name': 'Are you sure?',
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
      'name': 'What kind(s) of QA do you need?',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 3,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': 'What platforms do you need tested?',
      'completed': 10,
      'isVisible': false
    }
  ];
