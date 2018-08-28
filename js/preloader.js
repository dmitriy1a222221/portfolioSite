document.body.onload = function () {
    let images = document.images,
        imagesTotalCount = images.length,
        imagesLoaderCount = 0,
        percDisplay = document.getElementById('load_perc');

    for (let i = 0; i < imagesTotalCount; i++) {
        let imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }

    function imageLoaded() {
        imagesLoaderCount++;
        percDisplay.innerHTML = `${Math.floor((100 / imagesTotalCount) * imagesLoaderCount)}%`;
        if (imagesLoaderCount >= imagesTotalCount) {
            setTimeout(function () {
                let preloader = document.querySelector('.preloader');
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add("done");
                }

            }, 700)
        }
    }
};