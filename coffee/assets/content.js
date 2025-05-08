  const currentFile = window.location.pathname.split('/').pop().replace('.html', '');
  fetch(`./content/${currentFile}_content.html`)  // Adjust path here
    .then(response => response.text())
    .then(html => {
      document.getElementById('main').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('main').innerHTML = `
        <p>Error: Could not load content. Verify <strong>./content/${currentFile}_content.html</strong> exists.</p>
      `;
    });
