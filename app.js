var app;

app = angular.module('tictac',[]);

app.directive('buttonCalls', function(){

    return {
      restrict: 'E',
      templateUrl: 'button-calls.html',
      controller: function($scope) {
        $scope.player = "X";
        $scope.boton = [];

        $scope.hacerTodo = function(sorete) {
          $scope.doStuff(sorete);
          $scope.exchange();
          $scope.verify();
        }

        $scope.doStuff = function (item) {
          $scope.value = item.currentTarget.getAttribute("value");
        };

        $scope.exchange = function() {
          $scope.boton[$scope.value] = $scope.player;
          $scope.player == 'X' ? $scope.player = 'O' : $scope.player = 'X';
        };

        $scope.verify = function() {
          var bt1 = $scope.boton[1];
          var bt2 = $scope.boton[2];
          var bt3 = $scope.boton[3];
          var bt4 = $scope.boton[4];
          var bt5 = $scope.boton[5];
          var bt6 = $scope.boton[6];
          var bt7 = $scope.boton[7];
          var bt8 = $scope.boton[8];
          var bt9 = $scope.boton[9];

        //////////////////////Player "X"//////////////////////
          if(bt1 == "X" && bt2 == "X" && bt3=="X")
            alert("Gano X");
          if( bt4 == "X" && bt5 == "X" && bt6 == "X")
            alert("Gano X");
          if( bt7 == "X" && bt8 == "X" && bt9 == "X")
            alert("Gano X");
          if( bt1 == "X" && bt5 == "X" && bt9 == "X")
            alert("Gano X");
          if( bt3 == "X" && bt5 == "X" && bt7 == "X")
            alert("Gano X");
          if( bt1 == "X" && bt4 == "X" && bt7 == "X")
            alert("Gano X");
          if( bt2 == "X" && bt5 == "X" && bt8 == "X")
            alert("Gano X");
          if( bt3 == "X" && bt6 == "X" && bt9 == "X")
            alert("Gano X");
            //////////////////////PLAYER "O"//////////////////////
          if( bt1 == "O" && bt2 == "O" && bt3 == "O")
            alert("Gano O");
          if( bt4 == "O" && bt5 == "O" && bt6 == "O")
            alert("Gano O");
          if( bt7 == "O" && bt8 == "O" && bt9 == "O")
            alert("Gano O");
          if( bt1 == "O" && bt5 == "O" && bt9 == "O")
              alert("Gano O");
          if( bt3 == "O" && bt5 == "O" && bt7 == "O")
            alert("Gano O");
          if( bt1 == "O" && bt4 == "O" && bt7 == "O")
            alert("Gano O");
          if( bt2 == "O" && bt5 == "O" && bt8 == "O")
            alert("Gano O");
          if( bt3 == "O" && bt6 == "O" && bt9 == "O")
            alert("Gano O");
        };
      },
      controllerAs: 'change'
    };

});
