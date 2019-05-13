/*
 * @Author: 李浩栋
 * @Begin: 2019-05-11 09:28:06
 * @Update: 2019-05-13 08:10:44
 * @Update log: 更新日志
 */


 
/**
 * @description: 图片懒加载
 * @param {type} 
 * @return: 
 */
$(function () {

    var begin = 0,
        // 每次加载多少张
        loadingNum = 12,
        end = loadingNum,
        lastNum = {};

    getGoodsList();
    /**
     *  判断滚轮事件
     * 如果触底 调用图片
     */
    $(window).scroll(function () {
        var scrollTop = Math.ceil($(this).scrollTop());
        var scrollHeight = $(document).height();
        var windowHeight = Math.ceil($(this).height());
        if (scrollTop + windowHeight >= scrollHeight - 180) {
            getGoodsList();
        }
    });


    function getGoodsList() {
        lastNum.x = begin;
        lastNum.y = end;
        $.ajax({
            type: "get",
            url: "../imgsrc/imgsrc.json",
            dataType: "json",
            success: function (response) {
                var dataSum = response.shoppingShow;


                /**
                 * 0:
                    buyNum: "749"
                    href: "shoppingShow.html"
                    location: "show"
                    price: "88.00"
                    smallImg: (4) [{…}, {…}, {…}, {…}]
                    src: "https://gd4.alicdn.com/imgextra/i2/2734761526/O1CN011N8wqNo5YtK2Vsz_!!2734761526.jpg_400x400.jpg"
                    title: "ins复古衬衫男ulzzangbf原宿风港风韩版潮流宽松韩风chic外套学生"
                    __proto__: Object
                 */

                /**
                 * 通过一段一段截取图片  呈现分页效果
                 */
                var data = dataSum.slice(lastNum.x, lastNum.y);
                if (lastNum.y >= dataSum.length) {
                    endThis();
                }

                if (data && resizeBy.length > 0) {
                    $.each(data, function (index, ele) {
                        $('div.pic_list').append(`<dl class="goods_box">
                    <div class="goods_img_box">
                        <a href="${ele.href}#${ele.id}" target="_blank">
                            <img class="goods_img" width="150" height="190" data-original="${ele.src}" alt="" >
                        </a>
                    </div>
                    <dt><span class="price">¥ ${ele.price}</span>
                        <span class="font12">${ele.buyNum}人购买</span>
                    </dt>
                    <dd><span class="goods_title">
                            <a href="${ele.href}+#${ele.id}" target="_blank">
                                ${ele.title}
                            </a>
                        </span>
                    </dd>
                </dl>`)
                    })
                }
                $('div.pic_list img.goods_img').lazyload({
                    threshold: 180,
                    effect: 'fadeIn',
                    placeholder: "../images/loading.gif" //用图片提前占位
                });

                begin = lastNum.x + lastNum.y;
                end = begin + loadingNum;



            },
            error: function () {


            }
        });
    }

    function endThis() {

        console.log('end');
        
    }

})