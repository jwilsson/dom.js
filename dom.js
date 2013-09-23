;(function (window, document, undefined) {
	var $ = function (selector) {
		if (selector.nodeType) {
			this.elements = [selector];
		} else {
			this.elements = document.querySelectorAll(selector);
		}

		this.length = this.elements.length || 1;
	};

	$.prototype = {
		elements: [],
		length: 0,

		constructor: $,

		addClass: function (classname) {
			return this.each(function () {
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

		find: function (selector) {
			this.elements = this.elements[0].querySelectorAll(selector);
			this.length = this.elements.length;

			return this;
		},

		html: function (html) {
			if (html === undefined) {
				return this.elements[0].innerHTML;
			}

			return this.each(function () {
				this.innerHTML = html;
			});
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
		}
	};

	window.$ = function (selector) {
		return new $(selector);
	};
}(window, document));