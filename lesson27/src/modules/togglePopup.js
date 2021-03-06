const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupBtnClose = document.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');

    const showPopup = () => {
        popup.style.display = 'block'; // показать попап
        if (window.innerWidth > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
            let start = Date.now(); // получить стартовое время анимации (в момент клика)
            let timer = setInterval(() => {
                let timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
                if (timePassed >= 800) {
                    clearInterval(timer); // если время достигло определенного числа удалить setInterval 
                    return;
                };
                draw(timePassed); // отрисовка анимации 
            });
            let draw = (timePassed) => {
                let wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
                wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
                popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
                popupContent.style.marginLeft = wContent; // центрирование по горизонтали
            };
        } else {
            popupContent.style.left = '49.875%';
            popupContent.style.margin = '-150px';
        };
    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', showPopup);

    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = `none`;
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            };
        };

    });
};

export default togglePopUp;