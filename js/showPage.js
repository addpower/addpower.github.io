/*
 * @Author: 李浩栋
 * @Begin: 2019-05-11 10:53:39
 * @Update: 2019-05-13 08:05:57
 * @Update log: 更新日志
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
                /**
                 * buyNum: "749"
                    href: "shoppingDetail.html"
                    id: "01"
                    location: "show"
                    price: "88.00"
                    smallImg: Array(4)
                    0: {two: "https://gd1.alicdn.com/imgextra/i1/2734761526/O1CN011N8wqMMtHMK4hZ9_!!2734761526.jpg_50x50.jpg_.webp"}
                    1: {three: "https://gd1.alicdn.com/imgextra/i1/2734761526/O1CN011N8wqN4v6nzUF7l_!!2734761526.jpg_50x50.jpg_.webp"}
                    2: {four: "https://gd1.alicdn.com/imgextra/i1/2734761526/O1CN011N8wqOEvVLPXXL6_!!2734761526.jpg_50x50.jpg_.webp"}
                    3: {five: "https://gd4.alicdn.com/imgextra/i4/2734761526/O1CN011N8wqOEupnNPgjz_!!2734761526.jpg_50x50.jpg_.webp"}
                    length: 4
                    __proto__: Array(0)
                    src: "https://gd4.alicdn.com/imgextra/i2/2734761526/O1CN011N8wqNo5YtK2Vsz_!!2734761526.jpg_400x400.jpg"
                    title: "ins复古衬衫男ulzzangbf原宿风港风韩版潮流宽松韩风chic外套学生"
                    __proto__: Object
                 */
                var title = this.title,
                    lastPrice = this.lastPrice,
                    price = this.price,
                    oneImg = this.src,
                    twoImg = this.smallImg[0],
                    threeImg = this.smallImg[1],
                    fourImg = this.smallImg[2],
                    fiveImg = this.smallImg[3];


                
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
                            
                            // 加载完成后添加显示细节函数方法
                            $('body').append(`<script src="./js/showImgDetail.js"></script>`)
                        }
                    }
                }

                // 添加商品标题
                $('#goods-title').text(title);
                // 添加商品价格
                $('#lastmoney').text(lastPrice);
                // 添加商品优惠后的价格
                $('#nowmoney').text(price);
            }
        })

    }
});