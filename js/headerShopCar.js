$(function () {
    /**
     * 加入购物车
     */

    var addShop = {
        init: function () {
            this.showShopCar();
        },
        showShopCar: function () {
            $('.nav-shopcar').hover(function () {
                $(this).toggleClass('on');
                $(this).find('.shop_car_content').toggleClass('block');
                console.log($('.shop_car_ul li').length);

                if ($('.shop_car_ul li').length == 0) {
                    $('.shop_car_content h2').text('您最近没有添加商品！');
                } else {
                    $('.shop_car_content h2').text('最近加入的宝贝:');
                }
            })
        }
    }
    addShop.init();
})