window.onload = function() {
    // Load the head
    fetch('includes/head.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head').innerHTML = data;
        });

    // Load the header
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Load the footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Load the arrowup
    fetch('includes/arrowup.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('arrow-up').innerHTML = data;
    });
};
