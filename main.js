// Script to open the side drawer
function openNav() {
    document.getElementById("sideDrawer").style.width = "250px";
}

// Script to close the side drawer
function closeNav() {
    document.getElementById("sideDrawer").style.width = "0";
}

// Function to hide the navbar when scrolling down and show when scrolling up
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

