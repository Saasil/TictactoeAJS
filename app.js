var app;

app = angular.module('tictac',[]);

app.directive('buttonCalls', function(){

    return {
      restrict: 'E',
      templateUrl: 'button-calls.html',
      controller: function($scope) {

        $scope.inicio = function() {

          $scope.player = "X";
          $scope.solounganador = false;
          $scope.resultado = true;
          $scope.sum = 0;
          $scope.ganador = undefined;
          $scope.ganadortitle = undefined;
          $scope.boton = [];
          $scope.notchange = [1,2,3,4,5,6,7,8,9]

          };

        $scope.hacerTodo = function(sorete) {

          $scope.doStuff(sorete);

          if($scope.notchange[$scope.value] != false){
            $scope.exchange();
              if($scope.solounganador == false){
                $scope.verify();
                }
            }
        }

        $scope.doStuff = function (item) {
          $scope.value = item.currentTarget.getAttribute("value");
        };

        $scope.exchange = function() {
          $scope.boton[$scope.value] = $scope.player;
          $scope.player == 'X' ? $scope.player = 'O' : $scope.player = 'X';
          $scope.notchange[$scope.value] = false;
        };

        $scope.gano = function(quien) {
          $scope.ganador = quien;
        }

        $scope.verify = function() {
          var soluciones = [
            [1,2,3], [4,5,6], [7,8,9],
            [1,5,9], [3,5,7], [1,4,7],
            [2,5,8], [3,6,9],
          ];

       for (i=0; i<soluciones.length; i++) {

         $scope.sum++;

         var solucion = soluciones[i];

         if ($scope.boton[ solucion[0] ] === $scope.boton[ solucion[1] ] &&
             $scope.boton[ solucion[0] ] === $scope.boton[ solucion[2] ] &&
             $scope.boton[ solucion[0] ] !== undefined) {
             $scope.gano( $scope.boton[solucion[0]] );
             $scope.solounganador = true;
             $scope.ganadortitle = "Ganador ";
            }
         else {
           if($scope.sum >= 72 && $scope.solounganador == false) {
            $scope.resultado = false;
          }
         }
        }
       }
      },

      controllerAs: 'change'
 };

});
