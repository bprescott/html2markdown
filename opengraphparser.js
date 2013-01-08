/**
 * OpenGraphParser - Open Graph parser in javascript.
 *
 * @author Himanshu Gilani
 * 
 */

/**
 * OpenGraphParser
 * @param html - html string to convert
 * @return converted markdown text
 */

function OpenGraphParser(html, opts) {
	function convertAttrs(attrs) {
		var attributes = {};
		for(var k in attrs) {
			var attr = attrs[k];
			attributes[attr.name] = attr;
		}
		return attributes;
	}

 	try {
		var dom;
		if(html) {
		var e = document.createElement('div');
			e.innerHTML = html;
			dom = e;
		} else {
			dom = window.document.head;
		}

		HTMLParser(dom,{
			start: function(tag, attrs, unary) {
				tag = tag.toLowerCase();

				if(tag === 'meta') {

				}
			},
			chars: function(text) {},
			end: function(tag) {}
	
	} catch(e) {
		console.log(e.stack);
		console.trace();
	}	
}
