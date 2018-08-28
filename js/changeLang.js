function lookJson() {
    let xhr = new XMLHttpRequest(),
        elem = document.querySelectorAll('.localization'),
        commonBtn = document.querySelectorAll('.lang-icon'),
        btnRus = document.querySelector('.rus'),
        btnEng = document.querySelector('.eng');
        btnUk = document.querySelector('.uk');

    btnRus.addEventListener('click', () => {
        xhr.open('GET', 'js/rus.json', true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4) return;

            if(xhr.status !== 200) {
                alert(xhr.status + ':' + xhr.statusText)
            } else {
                elem.forEach(item => {
                    let key = item.dataset.name;
                    let lang = JSON.parse(xhr.responseText);
                    console.log(lang[key]);
                    item.innerText = lang[key]
                });
            }
            commonBtn.forEach(item => {
                item.style.opacity = '.4'
            });
            btnRus.style.opacity = '.8'
        };
    });
    btnEng.addEventListener('click', () => {
        xhr.open('GET', 'js/eng.json', true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4) return;

            if(xhr.status !== 200) {
                alert(xhr.status + ':' + xhr.statusText)
            } else {
                elem.forEach(item => {
                    let key = item.dataset.name;
                    let lang = JSON.parse(xhr.responseText);
                    console.log(lang[key]);
                    item.innerText = lang[key]
                });
            }
            commonBtn.forEach(item => {
                item.style.opacity = '.4'
            });
            btnEng.style.opacity = '.8'
        };
    });
    btnUk.addEventListener('click', () => {
        xhr.open('GET', 'js/uk.json', true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4) return;

            if(xhr.status !== 200) {
                alert(xhr.status + ':' + xhr.statusText)
            } else {
                elem.forEach(item => {
                    let key = item.dataset.name;
                    let lang = JSON.parse(xhr.responseText);
                    console.log(lang);
                    item.innerText = lang[key]
                });
            }
            commonBtn.forEach(item => {
                item.style.opacity = '.4'
            });
            btnUk.style.opacity = '.8'
        };
    });
}
lookJson();