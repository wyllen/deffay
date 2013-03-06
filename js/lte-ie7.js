/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-star' : '&#x61;',
			'icon-asterisk' : '&#x7a;',
			'icon-circle-full' : '&#x65;',
			'icon-arrow-right' : '&#x72;',
			'icon-arrow-up' : '&#x74;',
			'icon-next' : '&#x79;',
			'icon-previous' : '&#x75;',
			'icon-home' : '&#x69;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};