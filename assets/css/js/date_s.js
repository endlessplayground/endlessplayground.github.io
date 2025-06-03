// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
    
  // Get components
  const date_s = now.getDate(); // Automatic Dutch timezone
  
  // Inject into your existing layout
  document.getElementById('date_s').textContent = date_s;
});