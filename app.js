var app;

app = angular.module('tictac',[]);

app.directive('buttonCalls', function(){
  
    return {
      restrict: 'E',
      templateUrl: 'button-calls.html',
      controller: function($scope){

        this.player = "X";

        this.boton = [];

        $scope.doStuff = function (item) {
          $scope.value= item.currentTarget.getAttribute("value");
          };

        this.exchange= function(){

          this.boton[$scope.value] = this.player;

          this.player=='X' ? this.player='O' : this.player='X';

          };

          this.verify=function(){

            var bt1 = this.boton[1];
            var bt2= this.boton[2];
            var bt3 = this.boton[3];
            var bt4 = this.boton[4];
            var bt5 = this.boton[5];
            var bt6= this.boton[6];
            var bt7 = this.boton[7];
            var bt8 = this.boton[8];
            var bt9 = this.boton[9];

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


