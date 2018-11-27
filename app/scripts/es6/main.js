import $ from 'jquery';
import utilsSetup from './helpers/animations/utilsSetup';
import 'babel-polyfill';
import nav from './modules/nav';

//Vendors
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap-select');
//end vendors

$(() => {
  utilsSetup();
  nav();

  // const page = $('body').attr('class');
});
