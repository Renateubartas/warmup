{
    changeBgColor();
    document.addEventListener("DOMContentLoaded", function() {
        addYearToCopyRight();
    });

    function addYearToCopyRight() {
        let copyRight = document.getElementById("copyRightYear");
        let span = document.createElement("span");
        span.innerHTML = new Date().getFullYear().toString();
        copyRight.append(span);
    }

    function changeBgColor() {
        const colors = ["red", "blue", "turquoise", "yellow", "magenta"];
        const colorMap = new Map();
        colorMap.set(colors[0], "rgba(255, 0, 0, .4)");
        colorMap.set(colors[1], "rgba(0, 0, 255, .4)");
        colorMap.set(colors[2], "rgba(36, 255, 0, .4)");
        colorMap.set(colors[3], "rgba(255, 255, 0, .4)");
        colorMap.set(colors[4], "rgba(255, 0, 255, .4)");


        let randomColor = getRandomColor(colors);
        while (randomColor === localStorage.getItem("randomColor")) {
            randomColor = getRandomColor(colors);
        }
        localStorage.setItem("randomColor", randomColor);
        let rootElement = document.querySelector(':root');
        rootElement.style.setProperty('--bg-color', colorMap.get(randomColor));
    }

    function getRandomColor(colors) {
        let randomNum = Math.floor(Math.random() * colors.length);
        return colors[randomNum];
    }

}