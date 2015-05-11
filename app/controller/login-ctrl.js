/**
 * Created by veerabr on 11-05-2015.
 */
'use strict';
(function(angular){
    tariffWebClient.controller('LoginController',['$scope','$log',function($scope,$log){

        $scope.onSignInClick = function(event){
            event.preventDefault();
            $log.debug('::::::::::::> onSignInClick <::::::::::::');
        }

    }])
})(angular)