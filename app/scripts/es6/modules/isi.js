import $ from 'jquery';
import { $window } from '../helpers/animations/consts';
export default () => {

  let $seeMoreWrapper = $('.isi-expansion-toggle'),
      seeWrapperHeight = $seeMoreWrapper.height(),
      $isiModule = $('#isi'),
      viewPortBottom = null,
      isiModulePosition = null;

  function checkIfVisible(initialLoad) {
    seeWrapperHeight = $seeMoreWrapper.height();
    viewPortBottom = window.innerHeight;
    isiModulePosition = $isiModule.position();

    let $scrollTop = $window.scrollTop();
    viewPortBottom = $scrollTop + window.innerHeight;

    let lowestVisiblePoint = viewPortBottom - seeWrapperHeight;

    //If it is the initialLoad just hide or show the ISI tray without animation
    if (lowestVisiblePoint >= isiModulePosition.top) {
      initialLoad ? $seeMoreWrapper.hide() : $seeMoreWrapper.fadeOut(100);
    } else {
      initialLoad ? $seeMoreWrapper.show() : $seeMoreWrapper.fadeIn(100);
    }
  }

  function init() {
    checkIfVisible(true);

    $(window).on('scroll', function() {
      checkIfVisible();
    });
    $(window).on('resize', function() {
      checkIfVisible();
    });
  }

  $(document).ready(function() {
    init();
  });
};
