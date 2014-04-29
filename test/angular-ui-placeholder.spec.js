describe('placeholder directive', function(){
  var $compile, scope, element, className;

  beforeEach(module('zjuwwq.ui.placeholder'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _placeholderConfig_){
    $compile = _$compile_;
    scope = _$rootScope_.$new();
    className = _placeholderConfig_.className;
  }));

  function compile(){
    element = $compile('<input ng-model="name" placeholder="用户名">')(scope).append($('body'));
  }

  it('add placeholder on initialization', function(){
    compile();
    expect(element.val()).toEqual(element.attr('placeholder'));
    expect(element.hasClass(className)).toBeTruthy();
    scope.$digest();
    expect(scope.name).toBe('');
  });


  it('remove placeholder on focus empty input', function(){
    compile();
    element.focus();
    expect(element.val()).toBe('');
    expect(element.hasClass(className)).toBeFalsy();
    scope.$digest();
    expect(scope.name).toBe('');
  });

  it('add placeholder on blur empty input', function(){
    compile();
    scope.name = '';
    scope.$digest();
    element.blur();
    expect(element.val()).toEqual(element.attr('placeholder'));
    expect(element.hasClass(className)).toBeTruthy();
    scope.$digest();
    expect(scope.name).toBe('');
  });


  afterEach(function(){
    element.remove();
    scope.$destroy();
  });
});