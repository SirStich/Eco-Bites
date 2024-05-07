const imagesData = [
    "product-1.jpg",
    "product-2.jpg",
    "product-3.jpg",
];

const productDescriptionContainer = document.getElementById("product-description-container");

const descImages = Array.from(productDescriptionContainer.children);
const showImgClassName = "show-img";
let enableAutoPlay = false;
const autoPlayDelayInMs = 3_000;
// DOM Elements
const slider = document.querySelector("#slider-container");
const playBtn = document.querySelector(".playBtn-Container");
const leftBtn = document.querySelector("#s-left");
const rightBtn = document.querySelector("#s-right");

/*
The animation is called on each img element itself not the container for each image.
 */
// we set the interval on startup
// let refreshInterval = setInterval(() => {rightBtn.click()}, autoPlayDelayInMs);

// let refreshInterval = setInterval(() => {
//     updateImage("s-right")
// }, autoPlayDelayInMs);

//------------------- Functions ------------------
function createImageElement(imgData) {
    const imgElement = document.createElement('img');
    imgElement.src = `assets/images/${imgData}`;
    imgElement.className = "slider-img";
    return imgElement;
}

function createImageSlider(data) {
    const container = document.createElement("div");
    container.className = "container";
    // Auf diesen Container müssen wir die Animation ansprechen.
    const imagesDOMElements = data.map(ig => createImageElement(ig));
    console.log(imagesDOMElements)
    imagesDOMElements.forEach(el => slider.append(el))
}


function playPrevAnimation(atIndex, stage = "2", animTime = 0.5, direction = "forwards") {
    allImgs[atIndex].style.animation = `prev${stage} ${String(animTime)}s ease-in ${direction}`;
}


function playNextAnimation(atIndex, stage = "2", animTime = 0.5, direction = "forwards") {
    allImgs[atIndex].style.animation = `next${stage} ${String(animTime)}s ease-in ${direction}`;
}


// is responsible for updating the index and play the right animation, when right btn is pressed
function updateNextImage(withIdx) {
    if (withIdx >= allImgs.length - 1) {
        // we have to reset the index, if we are on the last index from the array
        withIdx = 0;
        // This is the animation for the BEFORE UPDATING INDEX
        playNextAnimation(withIdx, "2");
    } else {
        withIdx += 1;
        playNextAnimation(withIdx, "2");
    }
    return withIdx;
}


function updatePrevImage(withIdx) {
    if (withIdx <= 0) {
        // if we want to go back, and we are on the first index, we show the last element from the array
        withIdx = allImgs.length - 1;

        playPrevAnimation(withIdx, "2");
    } else {
        withIdx -= 1;
        playPrevAnimation(withIdx, "2");
    }
    return withIdx;
}

function loadImage(event) {
    let targetId = event.currentTarget.id;
    enableAutoPlay = false;

    if (!enableAutoPlay) {
        if (playBtn.classList.contains("isPlaying")) {
            playBtn.classList.remove("isPlaying");
        }
    }
    console.log(targetId);

    // clearInterval(refreshInterval);

    updateImage(targetId);
    // Reset the autoplay only if it's enabled
    if (enableAutoPlay) {

        // refreshInterval = setInterval(() => {
        //     updateImage("s-right")
        // }, autoPlayDelayInMs);
    }
}

function updateImage(eventId) {
    // we need to get the current index from the array
    let currentIdx = 0;

    // Remove 'active' class from all images first
    descImages.forEach(img => img.classList.remove('active'));

    // Find the image with the matching id and add the 'active' class




    allImgs.forEach((el, idx) => {
        if (el.classList.contains(showImgClassName)) {
            el.classList.remove(showImgClassName);
            currentIdx = idx;
            console.log(`image with idx to update: ${idx}`);
        }
    });

    // move the current image (BEFORE WE UPDATE IDX) with the right animation from right to left
    playNextAnimation(currentIdx, "1");
    if (eventId === "s-right") {

        currentIdx = updateNextImage(currentIdx);

    } else if (eventId === "s-left") {

        playPrevAnimation(currentIdx, "1");

        currentIdx = updatePrevImage(currentIdx);
    }
    const currentImage = document.querySelector(`#pd${currentIdx}`);
    if (currentImage) {
        currentImage.classList.add('active');
    }
    allImgs[currentIdx].classList.add(showImgClassName);
}

//------------------- Eventlistener -------------------
leftBtn.addEventListener("click", (e) => loadImage(e));
rightBtn.addEventListener("click", (e) => loadImage(e));
playBtn.addEventListener("click", () => {

    console.log("play click btn triggered")
    // we need to toggle the state
    enableAutoPlay = !enableAutoPlay;

    playBtn.classList.toggle("isPlaying", enableAutoPlay);

    if (enableAutoPlay) {
        // refreshInterval = setInterval(() => { rightBtn.click(); }, autoPlayDelayInMs);

        // refreshInterval = setInterval(() => {
        //     updateImage("s-right")
        // }, autoPlayDelayInMs);
    } else {
        // clearInterval(refreshInterval);
    }
});



// -------------------- Main Entry --------------------
createImageSlider(imagesData)
const allImgs = Array.from(document.querySelectorAll(".slider-img"));
// we need to set display block on the first image
allImgs[0].classList.add(showImgClassName);


