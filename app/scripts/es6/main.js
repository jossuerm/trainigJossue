import $ from 'jquery';
import utilsSetup from './helpers/animations/utilsSetup';
import 'babel-polyfill';
import nav from './modules/nav';
import isi from './modules/isi';

//Vendors
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap-select');
//end vendors

$(() => {
  utilsSetup();
  nav();
  isi();

  // const page = $('body').attr('class');
});
