/*
 * @Author: 李浩栋 
 * @Date: 2019-05-04 21:23:52 
 * @Last Modified by:   李浩栋 
 * @Last Modified time: 2019-05-04 21:23:52 
 */
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
    var userNameExp = /^([a-zA-Z])+([0-9])+(\w){6,11}$/ig,
        //以大写字母[A-Z]、小写字母[a-z]、数字[0-9]、下滑线[_]、减号[-]及点号[.]开头，并需要重复一次至多次[+]。
        // 中间必须包括@符号。
        // @之后需要连接大写字母[A-Z]、小写字母[a-z]、数字[0-9]、下滑线[_]、减号[-]及点号[.]，并需要重复一次至多次[+]。
        // 结尾必须是点号[.]连接2至4位的大小写字母[A-Za-z]{2,4}。
        emailExp = /^([\w_\-\.])+\@([\w_\-\.])+\.([A-Za-z]{2,4})$/ig,
        // 6-12个字符,由字母、数字的两种组合
        pwdExp = /[\w]{6,12}$/ig,
        phoneExp = /^1[345789]\d{9}$/;


    var userNameInput = $('#userName'),
        userNameTip = $('.tips', '.user-name'),
        userNameImg = $('.yes', '.user-name');

    var emailInput = $('#email'),
        emailTip = $('.tips', '.user-email'),
        emailImg = $('.yes', '.user-email');

    var pwdInput = $('#userPwd'),
        pwdTip = $('.tips', '.user-pwd'),
        pwdImg = $('.yes', '.user-pwd');

    var rePwdInput = $('#userRePwd'),
        rePwdImg = $('.yes', '.user-repwd'),
        rePwdTip = $('.tips', '.user-repwd');

    var phoneInput = $('#mobile'),
        phoneImg = $('.yes', '.user-phone'),
        phoneTip = $('.tips', '.user-phone');


    /**
     * 编写一个函数  实现动态监测用户输入内容是否符合规则
     * 
     * 
     * @param {*} target 目标输入框
     * @param {*} exp 输入框所对应的正则表达式
     * @param {*} tip 所匹配的提示性文本
     * @param {*} img 显示正确的图片
     */

    function monitoring(target, exp, tip, img) {
        target.on('change', function () {
            if (exp.test($(this).val())) {
                tip.css('display', 'none');
                img.addClass('inline');
            } else {
                img.removeClass('inline');
                tip.css('display', 'inline');
            }

        })
    }


    monitoring(userNameInput, userNameExp, userNameTip, userNameImg);
    monitoring(emailInput, emailExp, emailTip, emailImg);
    monitoring(pwdInput, pwdExp, pwdTip, pwdImg);
    monitoring(phoneInput, phoneExp, phoneTip, phoneImg);

    /**  
     * 如果密码规则不正确
     * 则在确认密码框输入不进行判断
     */
    rePwdInput.focus(function () {
        if (pwdImg.hasClass('inline')) {
            rePwdInput.change(function () {
                if ($(this).val() === pwdInput.val()) {
                    rePwdTip.css('display', 'none');
                    rePwdImg.addClass('inline');
                } else {
                    rePwdImg.removeClass('inline');
                    rePwdTip.css('display', 'inline');
                }

            });
        } else {
            rePwdImg.removeClass('inline');
        }
    });
    /**
     * 
     * 缺少提交条件判断
     */





})