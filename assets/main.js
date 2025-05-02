// Detect local vs GitHub Pages
const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

// Get the parts of the current path
const pathParts = location.pathname.split('/').filter(Boolean);
const currentFile = pathParts[pathParts.length - 1] || "index.html";

// Calculate how deep the current file is (excluding the file name)
const pathDepth = (currentFile === "index.html" && pathParts.length === 1) ? 0 : pathParts.length - 1;
const basePath = '../'.repeat(pathDepth);

// Function to fix image and href paths dynamically
function fixImagePaths(htmlContent) {
    return htmlContent.replace(/(src|href)="(?!https?)([^"]+)"/g, (match, attr, path) => {
        if (path.startsWith('images/')) {
            path = `${basePath}images/${path.slice(7)}`;
        } else if (path.startsWith('assets/')) {
            path = `${basePath}assets/${path.slice(7)}`;
        } else if (path.startsWith('includes/')) {
            path = `${basePath}includes/${path.slice(9)}`;
        }
        return `${attr}="${path}"`;
    });
}

// Load the header
fetch(`${basePath}includes/header.html`)
    .then(response => response.text())
    .then(data => {
        const fixed = fixImagePaths(data);
        document.getElementById('header').innerHTML = fixed;
    });

// Load the footer
fetch(`${basePath}includes/footer.html`)
    .then(response => response.text())
    .then(data => {
        const fixed = fixImagePaths(data);
        document.getElementById('footer').innerHTML = fixed;
    });

// Optionally: Load the arrow-up
fetch(`${basePath}includes/arrowup.html`)
    .then(response => response.text())
    .then(data => {
        const fixed = fixImagePaths(data);
        document.getElementById('arrow-up').innerHTML = fixed;
    });
