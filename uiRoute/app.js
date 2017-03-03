/**
 * Created by admin on 2017/1/18.
 */


var myApp = angular.module("myApp",['ui.router','ngTouch']);

myApp.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.when("","pageTab");
    //$urlRouterProvider.otherwise('/');

    $stateProvider
        .state("/",{
            url:"/pageTab",
            templateUrl:"pageTab.html"
        })
        .state("page1",{
            url:"/page1",
            templateUrl:"page1.html"
        })
        .state("page2",{
            url:"/page2",
            templateUrl:"page2.html"
        })
        .state("page3",{
            url:"/page3",
            templateUrl:"page3.html"
        })

});