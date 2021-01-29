import $ from 'jquery';
import utilsSetup from './helpers/animations/utilsSetup';
import 'babel-polyfill';
import { prefix } from './helpers/constants';
import nav from './modules/nav';
import isi from './modules/isi';
import firstVisit from './modules/first-visit-modal';
import exitModal from './modules/exitModal';
import floodlight from './modules/floodlight';

//Vendors
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap-select');
//end vendors

$(() => {
  utilsSetup();
  nav();
  isi();
  floodlight();

  if($(`.${prefix}-m-first-visit-modal`).length) {
    firstVisit();
  }

  if($(`.${prefix}-m-exit-modal`).length) {
    exitModal();
  }

  // const page = $('body').attr('class');
});
