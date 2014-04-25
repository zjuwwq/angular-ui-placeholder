angular.module('zjuwwq.ui.placeholder', [])
	.constant('placeholderConfig', {
		className: 'u-placeholder'
	})
	.directive('placeholder', ['placeholderConfig',
		function(placeholderConfig) {
			// if browser support
			var isSupport = 'placeholder' in document.createElement('input');
			if (isSupport) return {};

			var className = placeholderConfig.className;
			return {
				restrict: 'A',
				require: '?ngModel',
				link: function(scope, element, attrs, ngModel) {
					var placeholder = attrs.placeholder;
					if (!placeholder || attrs.type === 'password') return;

					function addPlaceholder() {
						if (!element.val()) {
							element.val(placeholder);
							element.addClass(className);
						}
					}
					element.on('focus', function() {
						if (element.val() === placeholder) {
							element.val('');
							element.removeClass(className);
						}
					}).on('blur', addPlaceholder);
					addPlaceholder();

					// use with ng-model
					if (ngModel) {
						ngModel.$parsers.unshift(function(value) {
							return value === placeholder ? '' : value;
						});
						ngModel.$formatters.push(function(value) {
							return value == undefined || value === '' ? placeholder : '';
						});
					}
				}
			};
		}
	]);