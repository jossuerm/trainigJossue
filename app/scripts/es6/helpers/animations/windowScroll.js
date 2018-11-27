import {
  $window,
  $header
} from './consts';

export let headerOffset = 0;
let headerWrapOffset = 0;


export function windowscroll() {
  if ($header.length > 0) {
    headerOffset = $header.offset().top;
    headerWrapOffset = $header.offset().top;
  }

  var headerDefinedOffset = $header.attr('data-sticky-offset');
  if (typeof headerDefinedOffset !== 'undefined') {
    if (headerDefinedOffset === 'full') {
      headerWrapOffset = $window.height();
      var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
      if (typeof headerOffsetNegative !== 'undefined') {
        headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1;
      }
    } else {
      headerWrapOffset = Number(headerDefinedOffset);
    }
  }
}

export function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  return function() {
    context = this;
    args = arguments;
    timestamp = new Date();
    var later = function() {
      var last = new Date() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      }
    };
    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
}

window.requesting = false;

export let killRequesting = debounce(function() {
  window.requesting = false;
}, 100);

