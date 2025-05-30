// main.js

// Function to exchange {level} in includes
function injectWithLevel(targetId, file) {
    fetch(`${level}includes/${file}`)
        .then(res => res.text())
        .then(data => {
            const el = document.getElementById(targetId);
            if (el) el.innerHTML = data.replace(/{level}/g, level);
        });
}

// Execute the includes
injectWithLevel("header", "header.html");
injectWithLevel("footer", "footer.html");
injectWithLevel("arrow-up", "arrowup.html"); // only if the element exsists