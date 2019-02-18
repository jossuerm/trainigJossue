import { prefix } from '../helpers/constants';

export default () => {
  let $modal          = $(`.${prefix}-m-first-visit-modal #first-visit-modal`),
      openDelay       = 10000,
      closeDelay      = 13000,
      isFirstVisit    = localStorage.getItem('isFirstVisit');

  // first visit
  if (isFirstVisit === null) {
    setTimeout(() => {
      $modal.modal('show');
    }, openDelay);

    $modal.on('shown.bs.modal', () => {
      setTimeout(() => {
        $modal.modal('hide');
      }, closeDelay);
    });
    isFirstVisit = false;
    localStorage.setItem('isFirstVisit', isFirstVisit);
  }
}
