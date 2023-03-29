angular.module('agreement-dialog', ['ui.bootstrap'])
    .factory('agreementService', function () {
      var cachedAgreement = undefined;
      var _agreementTitle = undefined;
      var _agreementText = undefined;
      var _grantText = undefined;
      var _btnCloseLabel = undefined;

      var service = {
        agreement: agreement,
        agreementTitle: agreementTitle,
        agreementText: agreementText,
        grantText: grantText,
        btnCloseLabel: btnCloseLabel
      };
      return service;
      
      async function agreement(url, tenant, btnCloseLabel) {
        
        if (!cachedAgreement) {
          
          tenant = new URL(window.location).searchParams.get('tenant') || tenant;
          
          cachedAgreement = fetch(url + (!!tenant ? ('?lang=' + tenant) : '')).then(response => response.json()).then(json => {
/*             cachedAgreement = json;
            _agreementTitle = json.data.type.name;
            _agreementText = "Hello";
            _grantText = json.data.grant_text;
            _btnCloseLabel = btnCloseLabel;   */ 
            cachedAgreement = json;
            _agreementTitle = "json.data.type.name";
            _agreementText = "Hello";
            _grantText = "json.data.grant_text";
            _btnCloseLabel = "btnCloseLabel";
                   
            return service; 
          });
        }
        return await cachedAgreement;
      }

      function agreementTitle() {
        return _agreementTitle;
      }

      function agreementText() {
        return _agreementText;
      }

      function grantText() {
        return _grantText;
      }
      
      function btnCloseLabel() {
        return _btnCloseLabel;
      }            
    })
    .filter('to_trusted_html', ['$sce', function($sce) {
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    }])
    .directive("agreementLink", ['agreementService', function(agreementService) {  
      return {  
        restrict: "E",  
        template: '<span> <a href="#"></a></span>',
        replace: true,
        compile: function (element, attributes) {
          // element.find('a').attr('ng-click', attributes.controller + '.modal()');
          return function ($scope, element, attributes) {
            agreementService.agreement(attributes.url, attributes.tenant, attributes.btnCloseLabel).then(svc => {
              let grantText = svc.grantText();
              console.log(attributes);
              let linkParts = grantText.split(/<link>(.*)<\/link>/);
              console.log(svc.grantText());
              if (linkParts.length === 3) {
                element.prepend(linkParts[0]);
                element.find('a').append(linkParts[1]);
                if (linkParts[2].startsWith(' '))
                  element.append('&nbsp;');
                element.append(linkParts[2]);
              }
            });
          }
        }                
      }  
    }])
    .controller('agreementController', ['$uibModal', 'agreementService', function ($modal, agreementService) {
      this.modal = function () {
        console.log('Hello');
        var modalInstance = $modal.open({
          controller: 'modalController',
          template: '<div class="modal-body">' +
                    '  <div ng-bind-html="agreementText | to_trusted_html"></div>' +
                    '</div>' +
                    '<div class="modal-footer center">' +
                    '  <button type="button" class="btn btn-default" ng-click="goback()">{{btnCloseLabel}}</button>' +
                    '</div>',
          resolve: {
            agreementTitle: function () {
              return agreementService.agreementTitle();
            },
            agreementText: function () {
              return agreementService.agreementText();
            },
            btnCloseLabel: function () {
              return agreementService.btnCloseLabel();
            }
          }
        });
        modalInstance.result.then(function (optionSelected) {
          console.log('Hello');
          if (optionSelected === 'accept') {
            console.log("Agreement accepted!")
          }
        }, function (optionSelected) {
          console.log('Hello');
          if (optionSelected === 'goback') {
            console.log("Agreement dismissed!")
          }
        })
      }
    }]);

angular.module('agreement-dialog')
    .controller('modalController', function ($scope, $modalInstance, agreementTitle, agreementText, btnCloseLabel) {
      console.log('Hello');
      $scope.agreementTitle = agreementTitle;
      $scope.agreementText = agreementText;
      $scope.btnCloseLabel = btnCloseLabel;
      $scope.accept = function () {
        $modalInstance.close('accept');
      };
      $scope.goback = function () {
        $modalInstance.dismiss('goback');
      };
    });