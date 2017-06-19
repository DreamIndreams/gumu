/**
 * Created by duguili on 2017/2/20.
 */
angular.module('app').directive('scrollTo',['$state','$timeout',function ($state,$timeout) {
    return{
        restrict: 'AE',
        scope:{
            state:'=',
            obj:'='
        },
        replace:true,
        link:function (scope,el) {
            el.bind('click',function () {
                $state.go(scope.state);
                $timeout(function () {
                    var obj=scope.obj;
                    var objPos=$(obj).offset().top;
                    $("html, body").animate({scrollTop: objPos}, "slow");
                },100)
            })
        }
    }
}])