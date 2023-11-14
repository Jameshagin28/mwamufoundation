function toggleNav() {
    const nav = document.getElementById("navbar");
    nav.style.display = mav.style.display == "none" ? "block" : "none";
}

/*homepage slideshow******************************/



//-----------ourTeam Flip Cards-----///
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});