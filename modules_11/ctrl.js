/**
 * Created by admin on 2016/12/21.
 */

app.directive("runoobDirective",function(){
    return{
        template :"我在指令构造器中创建！"
    };
});

app.controller("myCtrl", function($scope) {
    $scope.firstName	= "John";
    $scope.lastName= "Doe";
});
