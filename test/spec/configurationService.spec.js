/* globals testUtils */
describe('Service: configuration', function () {
  'use strict';

  var scope, configurationService;

  testUtils().testSetup({
    'moduleName': 'configurationModule',
    'translations': {
      'configuration': {
        'name': {
          'first': 'Luke'
        }
      }
    }
  });

  beforeEach(inject(function ($rootScope, _configurationService_) {
    scope = $rootScope;
    configurationService = _configurationService_;
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should correctly say hello', function () {
    expect(configurationService.sayHello()).toEqual('hello Luke');
  });
});
