function waitForElement(id, callback) {
    const element = document.getElementById(id);
    if (element) {
      callback(element);
    } else {
      setTimeout(() => waitForElement(id, callback), 100); // try again in 100ms
    }
  }
  
  waitForElement('collapsmenu', function (collaps) {
    const submenu = document.getElementById('submenu-grid');
    const arrow = document.getElementById('sub-open');
    const txt = document.getElementById('collapsmenu-txt');
    const txtDiv = document.getElementById('txt'); // The additional element you want to hide/show
  
    if (!submenu || !arrow || !txt || !txtDiv) {
      console.warn('Missing required elements (submenu, arrow, text, or txt div).');
      return;
    }
  
    // Store original text only once
    const originalText = txt.textContent;
  
    collaps.addEventListener('click', function () {
      const isOpen = submenu.style.height !== '0px' && submenu.style.height !== '';
  
      if (isOpen) {
        submenu.style.height = '0px';
        arrow.style.transform = 'rotate(0deg)';
        txt.textContent = originalText;
        txtDiv.style.display = 'block'; // Show the txt div when closing
      } else {
        submenu.style.height = submenu.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
        txt.textContent = 'sluit menu...';
        txtDiv.style.display = 'none'; // Hide the txt div when opening
      }
    });
  });