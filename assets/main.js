// Detect local vs GitHub Pages
const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

// Determine the base path based on current directory
const basePath = location.pathname.includes('/project/') ? '../' : '';

// Function to fix image paths dynamically
function fixImagePaths(htmlContent) {
    return htmlContent.replace(/(src|href)="(?!https?)([^"]+)"/g, (match, attr, path) => {
        // If path starts with 'images/', adjust to use relative path depending on directory
        if (path.startsWith('images/')) {
            path = `${basePath}images/${path.slice(7)}`;  // Remove 'images/' from the start and prepend the base path
        }
        return `${attr}="${path}"`;
    });
}

// Load the header
fetch(`${basePath}includes/header.html`)
    .then(response => response.text())
    .then(data => {
        // Adjust image paths in the header
        const fixedHeaderContent = fixImagePaths(data);
        document.getElementById('header').innerHTML = fixedHeaderContent;
    });

// Load the footer
fetch(`${basePath}includes/footer.html`)
    .then(response => response.text())
    .then(data => {
        // Adjust image paths in the footer
        const fixedFooterContent = fixImagePaths(data);
        document.getElementById('footer').innerHTML = fixedFooterContent;
    });

// Load the arrow-up
fetch(`${basePath}includes/arrowup.html`)
    .then(response => response.text())
    .then(data => {
        // Adjust image paths in the arrow-up (if any)
        const fixedArrowUpContent = fixImagePaths(data);
        document.getElementById('arrow-up').innerHTML = fixedArrowUpContent;
    });
