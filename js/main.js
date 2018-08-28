
//...........education responsive...............
function autoHeight() {
    let listItemDescription2 = document.querySelectorAll('.list-item__description ')[3];
    let height = listItemDescription2.getBoundingClientRect().height;
    let blockInfo = document.querySelectorAll('.block-info')[2];
    let heightBlockInfo = blockInfo.getBoundingClientRect().height;
    let styleElem = document.body.appendChild(document.createElement("style"));
    let sumH = height + 125;
    let sumMT = height + 95;
    let marginDistanse;

    if (heightBlockInfo > 59){
        marginDistanse = sumMT -= 37;
    } else {
        marginDistanse = sumMT
    }

    styleElem.innerHTML =
        `.block-border-point:after {height:${sumH}px !important;}
         .block-border-point {margin: 0 20px ${sumH - 4}px !important;}
         .margin-top {margin-top: ${marginDistanse}px}
         `;
}
(function(){
    let time;
    window.onresize = function(e){
        if (time)
        clearTimeout(time);
        time = setTimeout(function(){
            autoHeight(e);
        },10);
    }
})();
//...........end education responsive...............

//................skill bar...............
function skillBar() {
    let element = document.querySelectorAll('.skills-block__list_internal li');
    element.forEach(item => {
        let barLine = item.querySelectorAll('.bar-line')[0];
        let procent = item.querySelectorAll('.procent')[0];
        let left = procent.dataset.left;
        let width = barLine.dataset.width;
        let edge = barLine.dataset.edge;

        let id = setInterval(frame, 10);

        function frame() {
            if(width >= edge) {
                clearInterval(id);
            } else {
                width++;
                left++;
                barLine.style.width = width + '%';
                procent.style.left = left + '%';
                procent.innerHTML = width + '%';
            }
        }
    });
}
(function scroll() {
    let flag = true;
    window.onscroll = function() {
        let target = document.querySelectorAll('.wrapp-prof-skills')[0];
        let targetPos = target.offsetTop;
        let winHeight = window.pageYOffset;
        if(winHeight > targetPos && flag){
            skillBar();
            flag = false
        }
    };
})();
//.............end skill bar..............
//..............humburger menu............
(function adaptiveMenu() {
    let humMenu = document.querySelectorAll('.nav_humburger')[0];
    let flag = true;
    humMenu.addEventListener('click', function () {
        humMenu.classList.toggle('nav_humburger_click');
        let humburgerLine1 = document.querySelectorAll('.humburger-line1')[0];
        let humburgerLine2 = document.querySelectorAll('.humburger-line2')[0];
        let humburgerLine3 = document.querySelectorAll('.humburger-line3')[0];

        let navigationWrappElement = document.querySelectorAll('.navigation-wrapp-element')[0];
        if(flag){
            humburgerLine1.style.cssText = `transform: rotate(45deg)`;
            humburgerLine2.style.display = 'none';
            humburgerLine3.style.cssText = `transform: translate(0, -2px) rotate(-45deg);`;
            navigationWrappElement.style.cssText = `visibility: visible; right: 0;`;
            flag = false;
        } else {
            humburgerLine1.style.cssText = `transform: none`;
            humburgerLine2.style.display = 'block';
            humburgerLine3.style.cssText = `transform: none`;
            navigationWrappElement.style.cssText = `visibility: hidden; right: -100%;`;
            flag = true
        }

        //navigationWrappElement.classList.toggle('navigation-wrapp-element_click')
    })
})();
//.........end humburger menu............

//...............validation form..................
(function validate() {
    let types = {
        'name': /^[_a-zA-Z0-9а-яА-ЯёЁ ]+$/,
        'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'text': /.+/,
    };
    let form = document.querySelector('.contact-form');
    let formElement = form.querySelectorAll('[data-id]');
    formElement.forEach(item => {
        item.addEventListener('focus', function focus() {
            let spanFocus = item.nextSibling.nextSibling;
            spanFocus.classList.add('span_focus');
            item.style.cssText = 'border-bottom: 2px solid #02cfb4';
            let regEx;
            function valid() {
                if(!(regEx.test(item.value))){
                    item.style.cssText = 'border-bottom: 2px solid #cf5402';
                } else {
                    item.style.cssText = 'border-bottom: 2px solid #02cfb4';
                }
            }

            switch (item.dataset.id){
                case 'name':
                    regEx = types.name;
                    item.addEventListener('input', valid);
                    break;
                case 'email':
                    regEx = types.email;
                    item.addEventListener('input', valid);
                    break;
                case 'message':
                    regEx = types.text;
                    item.addEventListener('input', valid);
                    break;
            }

        });
        item.addEventListener('blur', function refocus() {
            let spanFocus = item.nextSibling.nextSibling;
            if(item.value !== ''){
                item.style.cssText = 'border-bottom: 2px solid #58616d';
            } else {
                spanFocus.classList.remove('span_focus');
                item.style.cssText = 'border-bottom: 2px solid #58616d';
            }
        })
    })
})();
//...............end validation form..................
class Modal {
    constructor(btnOpen, modalWrap) {
        this.btnOpen = document.querySelector(`${btnOpen}`);
        this.modalWrap = document.querySelector(`${modalWrap}`);
    }
    modalLogic() {
        this.btnOpen.addEventListener('click', () => {
            this.modalWrap.style.cssText = 'visibility: visible; opacity: 1; z-index: 20';
        });
        this.modalWrap.addEventListener('click', () => {
            this.modalWrap.style.cssText = 'visibility: hidden; opacity: 0; z-index: -10';
        })
    }
}
let modal = new Modal('.about-me__wrapp-btn', '.wrap-modal');
modal.modalLogic();
