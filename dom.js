;(function (window, document, undefined) {
	var $ = function (selector) {
		this.elements = document.querySelectorAll(selector);
		this.length = this.elements.length;
	};

	$.prototype = {
		elements: [],
		length: 0,

		constructor: $,

		addClass: function (classname) {
			this.each(function () {
				this.classList.add(classname);
			});
		},

		attr: function (name, value) {
			if (value === undefined) {
				if (!this.elements[0].hasAttribute(name)) {
					return '';
				}

				return this.elements[0].getAttribute(name) || '';
			}

			this.each(function () {
				this.setAttribute(name, value);
			});
		},

		css: function (name, value) {
			if (value === undefined) {
				return window.getComputedStyle(this.elements[0]).getPropertyValue(name);
			}

			this.each(function () {
				this.style[name] = value;
			});
		},

		each: function (callback) {
			var i = 0;

			for (; i < this.length; i++) {
				callback.call(this.elements[i], i);
			}
		},

		html: function (html) {
			if (html === undefined) {
				return this.elements[0].innerHTML;
			}

			this.each(function () {
				this.innerHTML = html;
			});
		},

		removeClass: function (classname) {
			this.each(function () {
				this.classList.remove(classname);
			});
		},

		text: function (text) {
			if (text === undefined) {
				return this.elements[0].textContent;
			}

			this.each(function () {
				this.textContent = text;
			});
		},

		toggleClass: function (classname) {
			this.each(function () {
				this.classList.toggle(classname);
			});
		}
	};

	window.$ = function (selector) {
		return new $(selector);
	};
}(window, document));