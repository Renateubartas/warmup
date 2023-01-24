{
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        let copyRight = document.getElementById("copyRightYear");
        let span = document.createElement("span");
        span.innerHTML = new Date().getFullYear().toString();
        copyRight.append(span);
    });
}
