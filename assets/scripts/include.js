(function () {
  const depth = location.pathname.split('/').filter(x => x).length;
  const base = '../'.repeat(depth - 1); // works for any depth > 1

  const load = (selector, file) => {
    fetch(base + 'includes/' + file)
      .then(res => res.ok ? res.text() : Promise.reject(file))
      .then(html => {
        document.querySelector(selector).innerHTML = html;
      })
      .catch(err => console.error('Include error:', err));
  };

  document.addEventListener('DOMContentLoaded', () => {
    load('header', 'header.html');
    load('nav', 'nav.html');
    load('footer', 'footer.html');

    // Add CSS dynamically so it always works
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = base + 'assets/styles/main.css';
    document.head.appendChild(link);
  });
})();

