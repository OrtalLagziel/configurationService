/**
 * configuration
 * @version v0.0.1 - 2016-07-14
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('configurationModule', ['pascalprecht.translate'])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

  /*  $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'configuration': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();*/
    }])
     .factory('configurationService', ["$resource", "$q", function ($resource, $q) {
        'use strict';

        var initDefer = $q.defer();

        var configuration = null;

        function init() {
            configuration = window.niceSaasWfm.appConfiguration;
            return $q(function(resolve, reject) {
                initDefer.resolve();
                resolve();
            });
        }

        function getKey(key) {
            if (configuration == null) {
                return null;
            }
            return configuration[key];
        }

        return {
            init: init,
            getKey: getKey,
            initialized: initDefer.promise
        };
    }]);
