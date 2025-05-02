// Detect how deep we are by counting slashes (excluding domain and last file)
const pathDepth = location.pathname
    .split("/")
    .filter(part => part && !part.includes(".")) // Ignore empty and the file.html
    .length;

const basePath = "../".repeat(pathDepth);

// Fix relative paths in fetched includes
function fixImagePaths(htmlContent) {
    return htmlContent.replace(/(src|href)="(?!https?:\/\/|\/)([^"]+)"/g, (match, attr, path) => {
        return `${attr}="${basePath}${path}"`;
    });
}

// Load the header
fetch(`${basePath}includes/header.html`)
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = fixImagePaths(data);
    });

// Load the footer
fetch(`${basePath}includes/footer.html`)
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = fixImagePaths(data);
    });
