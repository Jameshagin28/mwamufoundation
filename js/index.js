function toggleNav() {
    const nav = document.getElementById("navbar");
    nav.style.display = mav.style.display == "none" ? "block" : "none";
}

/*homepage slideshow******************************/
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startPositionX = 0;
    let currentTranslateX = 0;
    let prevTranslateX = 0;
    let animationId;

    slider.addEventListener("touchstart", (e) => {
        isDragging = true;
        startPositionX = e.touches[0].clientX;
        prevTranslateX = currentTranslateX;
        cancelAnimationFrame(animationId);
    });

    slider.addEventListener("touchend", () => {
        isDragging = false;
        const movedBy = currentTranslateX - prevTranslateX;
        if (movedBy < -100 && canMoveRight()) {
            moveRight();
        } else if (movedBy > 100 && canMoveLeft()) {
            moveLeft();
        } else {
            cancelMove();
        }
    });

    slider.addEventListener("touchmove", (e) => {
        if (isDragging) {
            const currentPositionX = e.touches[0].clientX;
            currentTranslateX = prevTranslateX + currentPositionX - startPositionX;
            updateSliderPosition();
        }
    });

    slider.addEventListener("touchcancel", () => {
        isDragging = false;
        cancelMove();
    });

    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentTranslateX}px)`;
    }

    function canMoveLeft() {
        return currentTranslateX < 0;
    }

    function canMoveRight() {
        const sliderWidth = slider.getBoundingClientRect().width;
        const slideWidth = sliderWrapper.getBoundingClientRect().width;
        return currentTranslateX > -(sliderWidth - slideWidth);
    }

    function moveLeft() {
        currentTranslateX += sliderWrapper.getBoundingClientRect().width;
        updateSliderPosition();
    }

    function moveRight() {
        currentTranslateX -= sliderWrapper.getBoundingClientRect().width;
        updateSliderPosition();
    }

    function cancelMove() {
        currentTranslateX = prevTranslateX;
        updateSliderPosition();
    }
});



//-----------ourTeam Flip Cards-----///