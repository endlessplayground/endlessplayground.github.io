// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
  
  // Dutch month names (3-letter, capitalized)
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  
  // Get components
  const month = months[now.getMonth()]; // Returns capitalized abbrev
  const date = now.getDate(); // Automatic Dutch timezone
  
  // Inject into your existing layout
  document.getElementById('month').textContent = month;
  document.getElementById('date').textContent = date;
});