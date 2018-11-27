import { prefix } from '../scripts/es6/helpers/';

import admin from '../_pages/admin';
import messenger from '../_pages/messenger';

module.exports = {
  global: {
    prefix: prefix,
  },
  pages: {
    admin: admin,
    messenger: messenger,
  }
}
