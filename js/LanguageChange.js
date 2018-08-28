class LookJson {
    constructor(elem, commonBtn, btnUk, btnEng, btnRus) {
        this.elem = document.querySelectorAll(`${elem}`);
        this.commonBtn = document.querySelectorAll(`${commonBtn}`);
        this.btnUk = document.querySelectorAll(`${btnUk}`);
        this.btnEng = document.querySelectorAll(`${btnEng}`);
        this.btnRus = document.querySelectorAll(`${btnRus}`);
    }
    lookJsonLogic () {
        let xhr = new XMLHttpRequest();

        let start = (btn) => {
            let classBtn = btn.className.split(' ');
            classBtn.splice(0, 2);
            let classLang = classBtn.join('');

            let selectLanguageJson =    (classLang === 'uk') ? 'js/uk.json' :
                                        (classLang === 'eng') ? 'js/eng.json' :
                                        (classLang === 'rus') ? 'js/rus.json' : undefined;

            btn.addEventListener('click', () => {
                xhr.open('GET', `${selectLanguageJson}`, true);
                xhr.send();

                xhr.onreadystatechange = function () {
                    if(xhr.readyState !== 4) return;

                    if(xhr.status !== 200) {
                        alert(xhr.status + ':' + xhr.statusText)
                    } else {
                            lookJson.elem.forEach(item => {
                            let key = item.dataset.name;
                            let lang = JSON.parse(xhr.responseText);
                            item.innerText = lang[key]
                        });
                    }
                    lookJson.commonBtn.forEach(item => {
                        item.style.opacity = '.4'
                    });
                    btn.style.opacity = '.8'
                };
            });
        };

        this.btnUk.forEach(btn => {
            start(btn);
        });
        this.btnEng.forEach(btn => {
            start(btn);
        });
        this.btnRus.forEach(btn => {
            start(btn);
        });
    }
}
let lookJson = new LookJson('.localization', '.lang-icon', '.uk', '.eng', '.rus');
lookJson.lookJsonLogic();

// document.addEventListener('DOMContentLoaded', () => {
//
// });