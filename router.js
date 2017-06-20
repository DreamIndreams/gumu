/**
 * Created by du on 2017/2/19.
 */
var app = angular.module('app', [
    'ui.router'
]);
angular.module('app')
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    //路由配置
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index',{
            url:'/',
            views:{
                'main':{
                    controller:'homeCtrl',
                    templateUrl:'views/home/home.html'
                }
            }
        })
        .state('news',{
            url:'/news-list',
            views:{
                'main':{
                    // controller:'homeCtrl',
                    templateUrl:'views/news/news-list.html'
                }
            }
        })
}])