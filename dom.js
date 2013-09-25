;(function (window, document, undefined) {
	'use strict';

	var $ = function (selector) {
		if (selector.nodeType) {
			this.elements = [selector];
		} else {
			this.elements = [].slice.call(document.querySelectorAll(selector));
		}

		this.length = this.elements.length;
	};

	$.prototype = {
		elements: [],
		length: 0,
		matches: null,

		constructor: $,

		addClass: function (classname) {
			return this.each(function () {
				this.classList.add(classname);
			});
		},

		attr: function (name, value) {
			if (value === undefined) {
				return this.elements[0].getAttribute(name) || null;
			}

			return this.each(function () {
				this.setAttribute(name, value);
			});
		},

		children: function () {
			this.elements = this.elements[0].children;
			this.length = this.elements.length;

			return this;
		},

		css: function (name, value) {
			if (value === undefined) {
				return window.getComputedStyle(this.elements[0]).getPropertyValue(name);
			}

			return this.each(function () {
				this.style[name] = value;
			});
		},

		each: function (callback) {
			var i = 0,
				result;

			for (; i < this.length; i++) {
				result = callback.call(this.elements[i], i);

				if (result === false) {
					break;
				}
			}

			return this;
		},

		filter: function (selector) {
			var newElements = [];

			this.each(function () {
				var element = new $(this);

				if (element.is(selector)) {
					newElements.push(this);
				}
			});

			this.elements = newElements;
			this.length = this.elements.length;

			return this;
		},

		find: function (selector) {
			this.elements = this.elements[0].querySelectorAll(selector);
			this.length = this.elements.length;

			return this;
		},

		hasClass: function (classname) {
			return this.elements[0].classList.contains(classname);
		},

		html: function (html) {
			if (html === undefined) {
				return this.elements[0].innerHTML;
			}

			return this.each(function () {
				this.innerHTML = html;
			});
		},

		is: function (selector) {
			var _this = this;

			if (!_this.matches) {
				['ms', 'moz', 'o', 'webkit'].forEach(function (prefix) {
					var method = prefix + 'MatchesSelector';

					if (document.documentElement[method]) {
						_this.matches = method;
					}
				});
			}

			return _this.elements[0][_this.matches](selector);
		},

		next: function () {
			this.elements = [this.elements[0].nextElementSibling];
			this.length = 1;

			return this;
		},

		off: function (event, callback) {
			return this.each(function () {
				this.removeEventListener(event, callback);
			});
		},

		on: function (event, callback) {
			return this.each(function () {
				this.addEventListener(event, callback, false);
			});
		},

		parent: function () {
			this.elements = [this.elements[0].parentNode];
			this.length = 1;

			return this;
		},

		prev: function () {
			this.elements = [this.elements[0].previousElementSibling];
			this.length = 1;

			return this;
		},

		remove: function () {
			return this.each(function () {
				this.parentNode.removeChild(this);
			});
		},

		removeAttr: function (name) {
			return this.each(function () {
				this.removeAttribute(name);
			});
		},

		removeClass: function (classname) {
			return this.each(function () {
				this.classList.remove(classname);
			});
		},

		text: function (text) {
			if (text === undefined) {
				return this.elements[0].textContent;
			}

			return this.each(function () {
				this.textContent = text;
			});
		},

		toggleClass: function (classname) {
			return this.each(function () {
				this.classList.toggle(classname);
			});
		},

		trigger: function (event) {
			return this.each(function () {
				this.dispatchEvent(event);
			});
		},

		val: function (value) {
			if (value === undefined) {
				return this.elements[0].value || '';
			}

			return this.each(function () {
				this.value = value;
			});
		}
	};

	window.$ = function (selector) {
		return new $(selector);
	};
}(window, document));
