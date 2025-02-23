let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu1 = document.getElementsByClassName("startmenu1")[0];

// Click event
taskbar.addEventListener("click", () => {
    if (startmenu1.style.bottom === "50px") {
        startmenu1.style.bottom = "-900px";
    } else {
        // Toggle
        startmenu1.style.bottom = "50px";
    }
});
