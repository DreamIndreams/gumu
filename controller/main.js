/**
 * Created by duguili on 2017/2/17.
 */
//把导航条点击显示下拉菜单改成鼠标悬停显示
$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
    dropdownOpen();//调用

//wow框架设置
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();
});
function dropdownOpen() {
  var $dropdownLi = $('li.dropdown');

  $dropdownLi.mouseover(function() {
    $(this).addClass('open');
  }).mouseout(function() {
    $(this).removeClass('open');
  });
}

// var app = angular.module('app', [
//     'ui.router'
// ]);
// angular.module('app').controller('mainCtrl',function(){});