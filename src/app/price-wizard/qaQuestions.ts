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
      'name': 'What platforms do you need?',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 4,
      'choices': [
          new Choice(0, 'Help me choose.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'I know what I need.', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
            ],
      'name': 'Do know how many resources you need?',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 5,
      'choices': [
          new Choice(0, 'Quality Assurance', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
      ],
      'name': '5',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 6,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': '6',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 7,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': '7',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 8,
      'choices': [
          new Choice(0, 'Help me choose.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'I know what I need.', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
            ],
      'name': '8',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 9,
      'choices': [
          new Choice(0, 'Quality Assurance', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Software Development', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false)
      ],
      'name': '9',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 10,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/blue.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/blue.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/blue.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': '10',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 11,
      'choices': [
          new Choice(0, 'Manual QA', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'Automation QA', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(2, 'Monitoring', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false),
          new Choice(3, 'Regression', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(4, 'Smoke', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
          new Choice(5, 'Acceptance', 'assets/img/black.jpg', '../../assets/img/dev-icon.png', false)
      ],
      'name': '11',
      'completed': 10,
      'isVisible': false
    },
    {
      'id': 12,
      'choices': [
          new Choice(0, 'Help me choose.', 'assets/img/black.jpg', '../../assets/img/qa-icon.png', false),
          new Choice(1, 'I know what I need.', 'assets/img/black.jpg', '../../assets/img/monitoring-icon.png', false),
            ],
      'name': '12',
      'completed': 10,
      'isVisible': false
    }
  ];
