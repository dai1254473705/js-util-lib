/**
 * Copyright 2012 Martin Gallagher
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function ($, undefined) {
	'use strict';

	/**
	 * Style.js major version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_MAJOR = 1;

	/**
	 * Style.js minor version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_MINOR = 0;

	/**
	 * Style.js patch version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_PATCH = 0;

	// Local copy
	var Util = function () {};

	// Globalisation
	$.Util = Util;

	/**
	 * Returns version of library
	 * @static
	 * @returns {String}
	 */
	Util.getVersion = function () {
		return VERSION_MAJOR + '.' + VERSION_MINOR + '.' + VERSION_PATCH;
	};

	/**
	 * Checks if value is empty
	 * @private
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Util.empty = function (value) {
		return !value || (Type.isString(value) && value === '') || (Type.isArray(value) && value.length === 0);
	};

	/**
	 * Check if a number is between two numbers
	 * @param {Number} min Minium value
	 * @param {Number} max Maxium value
	 * @returns {Boolean}
	 */
	Number.prototype.between = function (min, max) {
		return this >= min && this <= max;
	};

	/**
	 * Round a number to a given number of decimal places
	 * @param {Number} decimalPlaces Number of decimal places
	 * @returns {Number} Rounded number
	 */
	Number.prototype.round = function (decimalPlaces) {
		var multiplier = parseInt('1'.padRight('0', decimalPlaces + 1), 10);

		return Math.round(this * multiplier) / multiplier;
	};

	/**
	 * Upper case the first character of the string
	 * @returns {String}
	 */
	String.prototype.upperCaseFirst = function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};

	/**
	 * Trim white space from the string
	 * @returns {String}
	 */
	String.prototype.trim = function () {
		return this.replace(/^[\s]+|[\s]+$/, '');
	};

	/**
	 * Pad a string with a given character
	 * @param {String} character Character used to pad
	 * @param {Number} length Desired length of string to return
	 * @param {String} direction The end to pad: left (prepend) or right (append)
	 * @returns {String}
	 */
	String.prototype.pad = function (character, length, direction) {
		var out = this;

		if (this.length < length && character.length === 1 && (direction === undefined || direction === 'left' || direction === 'right')) {
			var count = length - this.length;

			if (!direction || direction === 'right') {
				while (count--) {
					out += character;
				}
			} else {
				while (count--) {
					out = character + out;
				}
			}
		}

		return out;
	};

	/**
	 * Right pad a string with a given character
	 * @param {String} character Character used to pad
	 * @param {Number} length Desired length of string to return
	 * @returns {String}
	 */
	String.prototype.padRight = function (character, length) {
		return this.pad(character, length, 'right');
	};

	/**
	 * Left pad a string with a given character
	 * @param {String} character Character used to pad
	 * @param {Number} length Desired length of string to return
	 * @returns {String}
	 */
	String.prototype.padLeft = function (character, length) {
		return this.pad(character, length, 'left');
	};

	/**
	 * Return array containing only unique values
	 * @returns {Array}
	 */
	Array.prototype.unique = function () {
		var assoc = {}, out = [], len = this.length;

		for (var i = 0; i < len; ++i) {
			if (!assoc.hasOwnProperty(this[i])) {
				out.push(this[i]);

				assoc[this[i]] = true;
			}
		}

		return out;
	};

	/**
	 * Return to maximum numerical value in the array
	 * @returns {Number}
	 */
	Array.prototype.max = function () {
		return Math.max.apply(Math, this);
	};

	/**
	 * Return to minimum numerical value in the array
	 * @returns {Number}
	 */
	Array.prototype.min = function () {
		return Math.min.apply(Math, this);
	};

	/**
	 * Return the sum total of numeric values in the array
	 * @param {Boolean} disableTypeSafe If true do numerical comparison using "=="
	 * @returns {Number}
	 */
	Array.prototype.sum = function (disableTypeSafe) {
		var total = 0;
		var len = this.length;

		if (len > 0) {
			for (var i = 0; i < len; ++i) {
				if (Type.isNumber(this[i], disableTypeSafe)) {
					total += this[i];
				}
			}
		}

		return total;
	};

	/**
	 * Return the average of numeric values in the array
	 * @param {Boolean} disableTypeSafe If true do numerical comparison using "=="
	 * @returns {Number}
	 */
	Array.prototype.average = function (disableTypeSafe) {
		var len = this.length;

		if (len > 0) {
			return this.sum(disableTypeSafe) / len;
		}
	};

	/**
	 * Check if the array contains the value provided
	 * @param {mixed} value
	 * @param {Boolean} disableTypeSafe If true do numerical comparison using "=="
	 * @returns {Boolean}
	 */
	Array.prototype.contains = function (value, disableTypeSafe) {
		var i = this.length;

		if (disableTypeSafe !== true) {
			while (i--) {
				if (this[i] === value) {
					return true;
				}
			}
		} else {
			while (i--) {
				if (this[i] == value) {
					return true;
				}
			}
		}

		return false;
	};

	/**
	 * Shuffle the Array items
	 * @returns {Array}
	 */
	Array.prototype.shuffle = function () {
		var out = this;

		for (var j, x, i = out.length; i; j = parseInt(Math.random() * i), x = out[--i], out[i] = out[j], out[j] = x);

		return out;
	};

	/**
	 * Object implementation of Array.unshift
	 * @returns {Object}
	 */
	Object.prototype.unshift = function () {
		var len = arguments.length;

		if (len > 0) {
			var out = {};
			var counter = 0;

			for (var i = 0; i < len; ++i) {
				out[i] = arguments[i];

				++counter;
			}

			if (this.length > 0) {
				for (var x in this) {
					out[counter] = this[x];

					++counter;
				}
			}

			return out;
		}

		return this;
	}

	/**
	 * Convert Object to Array
	 * @returns {Array}
	 */
	Object.prototype.toArray = function () {
		var out = [];

		if (this.length > 0) {
			for (var i in this) {
				out.push(this[i]);
			}
		}

		return out;
	};

	/**
	 * Return the sum total of numeric values in the Object
	 * @param {Boolean} multidimensional If true process the child objects
	 * @returns {Object}
	 */
	Object.prototype.sum = function (multidimensional) {
		var total = 0;

		for (var i in this) {
			if (Type.isNumber(this[i])) {
				total += this[i];
			} else if (Type.isArray(this[i]) || (multidimensional === true && Type.isObject(this[i]))) {
				total += this[i].sum(multidimensional);
			}
		}

		return total;
	};

	/**
	 * Debug functionality for the basic testing of object contents
	 * @returns {String}
	 */
	Object.prototype.stringify = function () {
		var out = [];

		for (var i in this) {
			if (!Type.isFunction(this[i])) {
				out.push(i + ': ' + this[i]);
			}
		}

		if (out.length > 0) {
			return out.join("\n");
		}

		return '';
	};

	/**
	 * Gets the object's type if there's a constructor function
	 * @returns {String} The object's type
	 */
	Object.prototype.getType = function () {
		var result = /function (.+)\(/.exec(this.constructor);

		if (result && result.length > 1) {
			return result[1];
		}
	};
})(this);