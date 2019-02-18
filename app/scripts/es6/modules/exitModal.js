import { prefix } from '../helpers/constants';

export default () => {

  let $clickableSection = $('.leaving-modal-trigger'),
      $leaveButton      = $(`.${prefix}-m-exit-modal .modal-leave-btn`),
      urlToRedirectTo;

  $clickableSection.on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    urlToRedirectTo = $this.attr('modal-url');
  });

  $leaveButton.on('click', function() {
    window.location.href = urlToRedirectTo;
  });
}
