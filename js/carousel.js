const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[1].getBoundingClientRect().width;
//const slidewidth = slideSize.width;

//console.log(slidewidth);

//arrange the slides next to eachother
//slides[0].style.left = slideWidth + 0 + 'px';
//slides[1].style.left = slideWidth + 1 + 'px';
//slides[2].style.left = slideWidth + 2 + 'px';
//slides[3].style.left = slideWidth + 3 + 'px';
//slides[4].style.left = slideWidth + 4 + 'px';
//slides[5].style.left = slideWidth + 5 + 'px';
//slides[6].style.left = slideWidth + 6 + 'px';
//slides[7].style.left = slideWidth + 7 + 'px';
//slides[8].style.left = 200 px;
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
//loop slides
//arange the slides next to one another
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}
const hideshowarrows = (slides, prevButton, nextButton, targetindex) => {

    if (targetindex = 0) {
        prevButton.classList.add('is_hidden');
        nextButton.classList.remove('is_hidden');
    } else if (targetindex === slides.length - 1) {
        prevButton.classList.remove('is_hidden');
        nextButton.classList.add('is_hidden');
    } else {
        prevButton.classList.remove('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
}



//when i click left, move slide to the left 
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevtDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide == prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows = (slides, prevButton, nextButton, prevIndex);

});
//when i click right,move slldes to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide == nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows = (slides, prevButton, nextButton, nextIndex);

});
//const amountToMove = nextSlide.style.left;
//move to the next slide 
//track.style.transform = 'translateX(-' + amountToMove + ')';
//currentSlide.classList.remove('current-slide');
//nextSlide.classList.add('current-slide');

//when i click the nav indicators,move to that slide
dots.dotsNav.addEventListener('click', e => {
    //when the indicator was clicked on...
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentslide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetindex = dots.findIndex(dot => dot == targetDot);
    const targetSlide = slides[targetindex];
    console.log(dots);

    moveToSlide(track, currentSlide, targetSlide);

    //currentDot.classList.remove('current-slide');
    //targetDot.classList.add('current-slide');
    updateDots(currentDot, targetDot);

    hideShowArrows = (slides, prevButton, nextButton, targetindex);
})