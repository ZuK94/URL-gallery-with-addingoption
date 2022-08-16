const imageContainer = document.getElementById("image-container");
const titleContainer = document.getElementById("title-container");
const nextImageBtn = document.getElementById("next-image");
const autoPlayBtn = document.getElementById("auto-play");
const stopBtn = document.getElementById("stop-auto-play");
const previousImageBtn = document.getElementById("previous-image");
const newImageUrl = document.getElementById("new-image");
const newImageTitle = document.getElementById("new-image-title");
const submitImage = document.getElementById("submit-new-image");

let alternatingImages;
let i = 0;

const floatingImages = [
  {
    url: "https://cdn.pixabay.com/photo/2022/07/30/14/07/butterfly-7353884_960_720.jpg",
    title: "butterfly",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/07/31/17/07/bird-7356346_960_720.jpg",
    title: "owl",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/08/12/16/23/thuja-7382049_960_720.jpg",
    title: "snow covered tree branch",
  },
];

submitImage.addEventListener(`click`, function () {
  floatingImages.push({
    url: `${newImageUrl.value}`,
    title: `${newImageTitle.value}`,
  });
});

nextImageBtn.addEventListener(`click`, function () {
  if (i < floatingImages.length - 1) {
    i += 1;
    imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
    titleContainer.innerHTML = `${floatingImages[i].title}`;
  } else {
    i = 0;
    imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
    titleContainer.innerHTML = `${floatingImages[i].title}`;
  }
});

previousImageBtn.addEventListener(`click`, function () {
  if (i <= 0) {
    i = floatingImages.length - 1;
    imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
    titleContainer.innerHTML = `${floatingImages[i].title}`;
  } else {
    i -= 1;
    imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
    titleContainer.innerHTML = `${floatingImages[i].title}`;
  }
});

autoPlayBtn.addEventListener(`click`, function autoPlay() {
  alternatingImages = setInterval(() => {
    if (i < floatingImages.length - 1) {
      i += 1;
      imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
      titleContainer.innerHTML = `${floatingImages[i].title}`;
    } else {
      i = 0;
      imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
      titleContainer.innerHTML = `${floatingImages[i].title}`;
    }
  }, 1000);
  stopBtn.addEventListener(`click`, function () {
    clearInterval(alternatingImages);
    alternatingImages = null;
  });
});

// imageContainer.innerHTML = `<img style="width:300px" src="${floatingImages[i].url}" alt="${floatingImages[i].title}">`;
