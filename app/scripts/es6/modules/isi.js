import IScroll from 'iscroll';
import { isMobile } from 'mobile-device-detect';

const docEl = document.documentElement,
      footerEl = document.querySelector('.footer'),
      // set it "false" if you don't need a sidebar tray,
      // should be an Integer number that represents the
      // breakpoint on which the sidebar tray should
      // disappear
      minScreenSizeForTray = false,
      scrollWrapperEl = document.querySelector('.scroll-wrapper'),
      scrollContainerEl = document.querySelector('.isi.tray');

let iScroll;
export default () => {
  if (minScreenSizeForTray && !isMobile && docEl.clientWidth >= minScreenSizeForTray) {
    setUpScroll();
    window.addEventListener('resize', updateScrollDimensions);
  }

  // If the footer ISI is visible on the page, avoid
  // overlapping from the tray
  if (docEl.scrollHeight === window.innerHeight) {
    hideTray();
  }

  window.addEventListener('scroll', handleScroll);
};

const handleScroll = () => {
  const footerHeight = ~~footerEl.clientHeight - 100,
        docHeight = docEl.scrollHeight,
        windowHeight = window.innerHeight,
        windowScrollTop = (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0),
        scrollLimit = docHeight - (windowHeight + windowScrollTop);

  footerHeight > scrollLimit ? hideTray() : showTray();
};

const hideTray = () => {
  if(scrollContainerEl) {
    scrollContainerEl.classList.add('hide-tray');
  }
};

const setUpScroll = () => {
  iScroll = new IScroll(scrollWrapperEl, {
    scrollbars: 'custom',
    interactiveScrollbars: true,
    mouseWheel: true,
    click: true,
    disableTouch: false
  });

  // Auto-refreshing the iScroll object after 4 miliseconds
  // this isn't a best practice but is used due an issue
  // on calc that the IScroll library makes in some browsers.
  setTimeout(() => {
    iScroll.refresh();
  }, 400);
};

const showTray = () => {
  if(scrollContainerEl) {
    scrollContainerEl.classList.remove('hide-tray');
  }
};

const updateScrollDimensions = () => {
  if (!isMobile) {
    iScroll.destroy();
    setUpScroll();
  }

  if (docEl.clientWidth < minScreenSizeForTray) {
    iScroll.destroy();
  }
};
