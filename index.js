(() => {
  'use strict';
  function moveButtons() {
    const bar = document.getElementById('ghostpen_bar');
    const buttons = document.getElementById('leftSendForm');
    if (!bar || !buttons || bar.contains(buttons)) return;
    bar.prepend(buttons);
  }
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      moveButtons();
    });
  });
  const start = () => {
    moveButtons();
    observer.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
