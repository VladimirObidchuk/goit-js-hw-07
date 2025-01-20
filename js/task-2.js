const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      ({ url, alt }) =>
        `<li class="gallery__item">
      <img class="gallery__img" src="${url}" alt="${alt}">
      </li>`
    )
    .join("")
);
function addStyle() {
  const galleryItem = document.querySelectorAll(".gallery__item");
  const galleryImg = document.querySelectorAll(".gallery__img");
  gallery.style.display = "flex";
  gallery.style.listStyle = "none";
  gallery.style.flexWrap = "wrap";
  gallery.style.padding = "0";
  gallery.style.margin = "0";
  gallery.style.rowGap = "48px";
  gallery.style.columnGap = "24px";
  galleryItem.forEach((item) => {
    item.style.width = "calc((100% - 48px) / 3)";
  });
  galleryImg.forEach((img) => {
    img.style.width = "100%";
    img.style.height = "100%";
  });
}
addStyle();
