import $ from 'jquery';
import { prefix, heightNav } from '../helpers/constants';

export default () => {

  let $nav       = $(`${prefix}-m-nav`),
      $navMenu   = $nav.find('.nav-menu'),
      $navMobile = $nav.find('.nav-mobile'),
      $body      = $('body');

  $nav.on('click', '.mobile-toggle-menu', function() {
    let $this = $(this);

    $this.add($navMenu).add($navMobile).toggleClass('open');
    $body.toggleClass('no-scroll');
    $nav.height(heightNav + 10);
  });

  //submenu for mobile
  let $expandSubmenuIcon = $('.nav-item .icon');

  if ($expandSubmenuIcon.length > 0) {

    $expandSubmenuIcon.on('click', (e) => {
      submenuHandler(e);
    });
  }

  function submenuHandler(e) {
    let $el = $(e.target);
    let isClosed = $el.hasClass('open') ? true : false;
    $el
    .toggleClass('open close')
    .siblings('.submenu').toggle(isClosed);
  }
}
