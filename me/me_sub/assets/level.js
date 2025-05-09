// Automatically calculate the correct "../" depth
function getLevel() {
  const depth = window.location.pathname.split('/').filter(part => part).length - 1;
  return '../'.repeat(depth);
}

const level = getLevel(); // Dynamically sets "../../", "../../../", etc.
console.log("Auto-detected level:", level); // Check the console!