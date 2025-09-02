document.addEventListener("DOMContentLoaded", function () {

    const quotes = [
        {
            text: "Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.",
            author: "Rebecca Jhonson"
        },
        {
            text: "Praesent vehicula neque eu justo malesuada, cursus libero dapibus. Integer vitae augue vitae augue tincidunt feugiat. Aliquam erat volutpat, sed semper sapien.",
            author: "Rebecca Jhonson"
        },
        {
            text: "Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed ac nibh nec urna cursus efficitur. Integer vitae augue vitae augue tincidunt feugiat.",
            author: "Rebecca Jhonson"
        }
    ];


    const textEl = document.querySelector(".section-3-quote__paragraph");
    const authorEl = document.querySelector(".section-3-quote__author");
    const leftBtn = document.querySelector(".section-3-arrow-button--left");
    const rightBtn = document.querySelector(".section-3-arrow-button--right");

    let currentIndex = 0;

    function updateQuote() {
        textEl.textContent = quotes[currentIndex].text;
        authorEl.textContent = quotes[currentIndex].author;
    }

    leftBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        updateQuote();
    });

    rightBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % quotes.length;
        updateQuote();
    });

    updateQuote();
});

