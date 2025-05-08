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

// Fetch the HTML and fix internal paths
fetch(`${basePath}includes-sub/category.html`)
    .then(res => res.text())
    .then(data => {
        const fixed = fixImagePaths(data); // ✅ Call your fixer function
        document.getElementById("category-contain").innerHTML = fixed;
    })
    .catch(err => console.error("Fetch error:", err));
