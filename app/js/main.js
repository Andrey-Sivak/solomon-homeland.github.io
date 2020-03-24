import { Slider } from "./slider";
import { MobMenu } from './menu.js';

window.addEventListener('load', function () {

    dealShowMore();
    sliders();

    function dealShowMore() {
        const dealsList = document.getElementsByClassName('deal');
        if( !dealsList[0] ) {
            return;
        }

        const dealsListArr = [];

        for (let i = 0; i < dealsList.length; i++) {
            dealsListArr.push(dealsList[i]);
        }

        dealsListArr.forEach( function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const showMoreBtn = item.getElementsByClassName('deal_more-btn')[0];
                if (e.target === showMoreBtn) {
                    const showContent = item.getElementsByClassName('deal_more')[0];
                    if (showContent.classList.contains('deal_more-active')) {
                        showContent.classList.remove('deal_more-active');
                        showMoreBtn.classList.remove('deal_more-btn-active');
                    } else  {
                        showContent.classList.add('deal_more-active');
                        showMoreBtn.classList.add('deal_more-btn-active');
                    }
                }
            })
        })
    }

    function sliders() {
        const slidersWrap = document.getElementsByClassName('deal_slider-wrap');
        for (let k = 0; k < slidersWrap.length; k++) {

            const wrapName = `#slider${k + 1}`;
            const prev = `#prev${k + 1}`;
            const next = `#next${k + 1}`;

            const slider = new Slider({
                wrap: wrapName,
                autoplay: false,
                dots: false,
                nextArrow: next,
                prevArrow: prev
            });
            slider.init();
        }
    }

    const mobMenu = new MobMenu({
        btn: 'menu-burger',
        menuContent: 'header_menu'
    });

    mobMenu.init();

});