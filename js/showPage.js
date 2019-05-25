/*
 * @Author: 李浩栋
 * @Begin: 2019-05-11 10:53:39
 * @Update: 2019-05-25 19:16:14
 * @Update log: 添加详情页信息的动态更新，调取后台数据
 */

/**
 * 实现思路
 * 
 * 获取当前url后面跟随的hash值
 * 
 * 找到对应的商品id  将商品对应的信息展示到页面
 */


var url = window.location.href;
var id = url.slice(url.indexOf('#') + 1);

$.ajax({
    type: "get",
    url: "../imgsrc/imgsrc.json",
    dataType: "json",
    success: function (response) {

        var dataSum = response.shoppingShow;

        $.each(dataSum, function (index, ele) {
            if (ele.id == id) {

                var title = this.title,
                    lastPrice = this.lastPrice,
                    price = this.price,
                    oneImg = this.src,
                    twoImg = this.smallImg[0],
                    threeImg = this.smallImg[1],
                    fourImg = this.smallImg[2],
                    fiveImg = this.smallImg[3],
                    commentsSum = this.commentsSum,
                    transactionSum = this.transactionSum,
                    originPlace = this.originPlace;

                // 遍历图片  添加到页面中
                var imgSum = [],
                    flag = 0,
                    mulitImg = [oneImg, twoImg, threeImg, fourImg, fiveImg];
                var imgTotal = mulitImg.length;
                for (var i = 0; i < imgTotal; i++) {
                    imgSum[i] = new Image();
                    imgSum[i].src = mulitImg[i];
                    imgSum[i].onload = function () {
                        flag++;
                        if (flag == imgTotal) {
                            $('#middle_top').append(`<div class="left_pic">
                                <div class="box">
                                    <img src="${imgSum[0].src}" width="360" height="360" alt="">
                                    <div class="move"></div>
                                </div>
                                <ul class="small_piclist" id="goodsList">
                                    <li class="on"><a href="javascript:;"><img src="${imgSum[0].src}" alt=""></a></li>
                                    <li><a href="javascript:;"><img src="${imgSum[1].src}" alt=""></a></li>
                                    <li><a href="javascript:;"><img src="${imgSum[2].src}" alt=""></a></li>
                                    <li><a href="javascript:;"><img src="${imgSum[3].src}" alt=""></a></li>
                                    <li><a href="javascript:;"><img src="${imgSum[4].src}" alt=""></a></li>
                                </ul>
                            </div>
                            <div class="right_pic">
                                <img src="${imgSum[0].src}" alt="">
                            </div>`)
                            $('body').append(`<script src="./js/showImgDetail.js"></script>`)
                        }
                    }
                }

                // 遍历尺寸  添加到页面
                var sizeStr = "",
                    colorStr = "",
                    sizeArr = ele.sizeSum,
                    colorArr = ele.colorSum,
                    colorLen = colorArr.length,
                    sizeLen = sizeArr.length;

                for (var i = 0; i < sizeLen; i++) {
                    sizeStr += `<li data-price=${sizeArr[i].price} data-quantity=${sizeArr[i].quantity} >${sizeArr[i].specs}</li>`;
                }

                for (var i = 0; i < colorLen; i++) {
                    colorStr += `<li>${colorArr[i]}</li>`
                }

                // 添加商品标题
                $('#goods-title').text(title);
                // 添加商品价格
                $('#lastmoney').text(lastPrice);
                // 添加商品优惠后的价格
                $('#nowmoney').text(price);
                // 添加商品尺寸规格
                $('ul.sizeDetail').html(sizeStr);
                // 添加商品颜色模块
                $('ul.colorDetail').html(colorStr);
                // 添加商品交易总数
                $('#transactionSum').html(transactionSum);
                // 添加商品评价总数
                $('#commentsSum').html(commentsSum);
                // 添加商品发货地
                $('.origin').text(originPlace);

            }
        })

    }
});