function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.visibility = menu.style.visibility === "visible" ? "hidden" : "visible";
    menu.style.transform = menu.style.transform === "translateX(0)" ? "translateX(-100%)" : "translateX(0)";
}

function downloadApp() {
        let link = document.createElement('a');
        link.href = 'example.txt';
        link.download = 'example.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}
