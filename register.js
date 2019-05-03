/**
 * 用户名框检测  右边显示允许图标
 *              否则显示用户名规则
 * 邮箱地址检测  右边显示允许图标
 *              否则显示-当前邮箱规则不规范
 * 密码框检测    右边显示密码强度图标
 *               检测确认密码和密码框内容是否一致
 * 手机号检测    右边显示密码强度图标
 *              检测手机号是否符合规范
 * 
 * 
 */


$(function () {
    // 用户名第一位字母  必须包含数字  长度为5-12
    $('#userName').on('input', function () {
        var exp = /^[a-zA-Z]\w{4,11}$/ig;
        if(exp.test($(this).val())){
            $('.tips').css('display','none');
            $('.yes').addClass('block');
        }else{
            $('.yes').removeClass('block');
            $('.tips').css('display','inline');
        }
    })







})