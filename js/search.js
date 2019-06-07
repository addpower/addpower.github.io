/*
 * @Author: 李浩栋
 * @Begin: 2019-06-04 18:59:05
 * @Update: 2019-06-04 19:43:49
 * @Update log: 增加搜索框
 * 
 * 首页进行搜索
 * 关键词跳转到列表页
 * 
 */
var searchEvent = {
    init:function(){
        this.setValue();
        this.getValue();
    },
    getValue:function(){
        var _this = this;
        $('#search-btn').click(function(){
            console.log(12);
            
            _this.searchValue();
        })
        $('#search-input').keyup(function (e) { 
            if(e.keyCode == 13){
                _this.searchValue();
            }
        });
    },
    setValue:function(){
        var keyWords = window.location.search;
        keyWords = keyWords.slice(1);
        if(keyWords){
            $('#search-input').val(keyWords);
        }
    },
    searchValue:function(){
        var keyWords = $('#search-input').val();
        var location = "http://localhost:8080/shoppingShow.html";
        var Online = "https://powerdong.github.io/shoppingShow.html";
        var pathname = "/shoppingShow.html";
        if(window.location.pathname == pathname){
            if(keyWords){
                window.location = location +"?"+ keyWords;
                // console.log(window.location.search);
                $('#search-input').val("");
            }
        }
    }
}

searchEvent.init();