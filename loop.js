
text = "Blah Eric blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah Erorman blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		if( text[i]){
			for(var j = i; j < (myName.length + i); j++) {
				hits.push(text[j]);
			}
		}
	}
}

if (hits.length === 0) {
	document.write("Your name wasn't found!");
} else {
	document.write(hits);
}