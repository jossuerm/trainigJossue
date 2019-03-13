import { prefix } from '../scripts/es6/helpers/';

import admin from '../_pages/admin';
import messenger from '../_pages/messenger';

module.exports = {
  global: {
    prefix,
    ga: {
      enabled: true,
      id: 'UA-XXXXX-Y'
    },
    gtm: {
      enabled: true,
      id: 'GTM-XXXX'
    },
    isi: {
      tray: false,
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
    },
    modals: {
      firstVisitModal: {
        enabled: false,
        id: 'first-visit-modal',
        bodyCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum varius nisi a lobortis. Morbi est nulla, ultrices ac leo sit amet, tincidunt laoreet mauris. Ut in imperdiet erat. Morbi iaculis lectus id tellus fringilla, vitae cursus mauris luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      exitModal: {
        enabled: false,
        id: 'exit-modal',
        bodyCopy1: 'You are leaving the current site.',
        bodyCopy2: 'Click below if you wish to proceed.'
      }
    }
  },
  pages: {
    admin,
    messenger
  }
}
