import { prefix } from '../scripts/es6/helpers/';

import admin from '../_pages/admin';
import messenger from '../_pages/messenger';

module.exports = {
  global: {
    prefix,
    isi: {
      tray: true,
      title: 'What is Lorem Ipsum?',
      content: {
        paragraph_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        list_1: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'In mollis diam in turpis vehicula, a bibendum felis dapibus.',
          'Fusce sagittis massa quis arcu sagittis sagittis.',
          'Donec ullamcorper lacus a ornare luctus.',
          'Nulla in diam eu justo placerat finibus.'
        ]
      }
    }
  },
  pages: {
    admin,
    messenger
  }
}
