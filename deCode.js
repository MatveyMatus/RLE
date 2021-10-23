let fs = require('fs');
let inText;
let arg = process.argv;
let i = 0,  n = 0, y = 0;
let enStr = '';

inText = fs.readFileSync(arg[2]);
inText = inText.toString();
while (i < inText.length){
	if (inText.charAt(i) == "#"){
		n = inText.charCodeAt(i+1);
		enStr += inText.charAt(i+2).repeat(n);
		i += 3;
	}
	else{
		enStr += inText.charAt(i);
		i++;
	}
	n = 1;
}
fs.writeFileSync(arg[3],enStr);
console.log('complete');