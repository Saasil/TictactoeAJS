var app;
app = angular.module('tictac',[]);

var boton1 ="";
var boton2 ;

app.controller('ChangeValue', function($scope){
  this.player = "X";

  $scope.doStuff = function (item) {
      $scope.value= item.currentTarget.getAttribute("value");
  };

    this.exchange= function(){

    $scope.value = this.player;

    this.player=='X' ? this.player='O' : this.player='X';
    };

});


/*  this.count = "X";

  this.exchange = function(){

      this.boton1 = this.count;

      this.count=='X' ? this.count='O' : this.count='X';

  };
*/


