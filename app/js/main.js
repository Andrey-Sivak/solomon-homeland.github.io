window.addEventListener('load', function () {

    dealShowMore();

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
});