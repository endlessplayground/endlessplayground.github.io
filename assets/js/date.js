document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

  const month = months[now.getMonth()];
  const date = now.getDate();

  const monthEl = document.getElementById('month');
  const dateEl = document.getElementById('date');
  const dateSmallEl = document.getElementById('date_s');

  if (monthEl) monthEl.textContent = month;
  if (dateEl) dateEl.textContent = date;
  if (dateSmallEl) dateSmallEl.textContent = date;
});
