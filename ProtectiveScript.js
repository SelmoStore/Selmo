window.addEventListener('load', function () {


  // Prevent context menu
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Prevent text selection
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';

  // Disable developer tools shortcuts
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });

  // Detect Print Screen key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen') {
      showOverlay();
      setTimeout(hideOverlay, 2000); // Show the overlay for 2 seconds
    }
  });

  // Function to prevent image actions
  function preventImageActions() {
    document.querySelectorAll('img').forEach(img => {
      img.setAttribute('draggable', 'false');
      img.addEventListener('contextmenu', (e) => e.preventDefault());
    });
  }

  // Function to create an overlay
  function createOverlay() {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = 1000;
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    return overlay;
  }

  var screenshotOverlay = createOverlay();

  function showOverlay() {
    screenshotOverlay.style.display = 'block';
  }

  function hideOverlay() {
    screenshotOverlay.style.display = 'none';
  }

  preventImageActions(); // Initial call




});
