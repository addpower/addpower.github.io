/*
 * @Author: 李浩栋 
 * @Date: 2019-05-02 16:20:24 
 * @Last Modified by: 李浩栋
 * @Last Modified time: 2019-05-02 17:15:13
 * 
 * 
 * 详情页面的城市地址选择
 */


var provinceText = '',
    cityText = '',
    townText = '';
var province = $('#province'),
    city = $('#city'),
    town = $('#town');
var provinceVal,
    cityVal,
    townVal;
var cityLen ,
    townLen;

$('.target').click(function () {
    $('.city_selector', '.dil').addClass('block');
    return false;
})

// 省份的名称及id
$(arrCity).each(function (index, ele) {
    //  console.log(ele.province);
    //  console.log(ele.pid);
    provinceText += '<option value="' + index + '">' + ele.name + '</option> ';
});

province.html(provinceText);
$('#province').css('visibility', 'visible')

cityContent(arrCity[province.val()])
// townContent(data.county[city.val()]);

province.change(function () {
    cityLen = arrCity[province.val()].sub;
    // 市级信息改变
    cityContent(cityLen)
    
    townLen = arrCity[province.val()].sub[city.val()].sub;
    // 县级信息改变
    townContent(townLen);
    
    $('#city').css('visibility', 'visible')
})

city.change(function () {
    
    townLen = arrCity[province.val()].sub[city.val()].sub;  
    townContent(townLen);

    if(townLen){
        $('#town').css('visibility', 'visible')
    }
})

$('.submit_city').click(function () {
    $('.city_selector', '.dil').removeClass('block');
    provinceVal = province.find("option:selected").text();
    cityVal = city.find("option:selected").text();
    townVal = town.find("option:selected").text();

    $('.target').text(provinceVal + cityVal + townVal );
    

})

/**
 * 
 * @param {*} targetCity 目标城市数组
 * 
 * 改变市级选框
 */

function cityContent(targetCity) {
    cityText = '';
    $(targetCity).each(function (index, ele) {
        // console.log(ele.city);
        // console.log(ele.id);
        cityText += '<option value="' + index + '">' + ele.name + '</option> ';
    })
    city.html(cityText);

}

/**
 * 
 * @param {*} targetTown 目标县级城市数组
 * 
 * 改变县级选框
 */

function townContent(targetTown) {
    townText = '';
    $(targetTown).each(function (index, ele) {
        // console.log(ele.city);
        // console.log(ele.id);
        townText += '<option value="' + index + '">' + ele.name + '</option> ';
    })
    town.html(townText);


}