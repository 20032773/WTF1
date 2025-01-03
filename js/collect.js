document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "img/collect1.jpg",
        "img/collect2.jpg",
        "img/collect3.jpg",
    ];
    let currentIndex = 0;

    const collectionImg = document.getElementById("collection-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const updateImage = () => {
        collectionImg.src = images[currentIndex];
        collectionImg.alt = `收藏物品 ${currentIndex + 1}`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});
