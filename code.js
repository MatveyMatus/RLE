let fs = require('fs');
let inText;
let arg = process.argv;
let i = 0,  n = 1, k = 0, r = 0;
let enStr = '';
let mStr = '';

inText = fs.readFileSync(arg[2]);
inText = inText.toString();
while (i < inText.length){
	while (inText.charAt(i) == inText.charAt(i+n))
		n++;
	if (n > 3){
		r = n;
		if (n > 255){
			k = Math.floor(n / 255);
			mStr = '#' + String.fromCharCode(255) + inText.charAt(i);
			enStr = mStr.repeat(k);
			r = n - (k * 255);
		}
		if (r > 3)
			enStr += '#' + String.fromCharCode(r) + inText.charAt(i);
		else
			enStr += inText.charAt(i).repeat(r);
	}
	else if (inText.charAt(i) == '#')
		enStr += '#' + String.fromCharCode(n) + '#';
	else
		enStr += inText.charAt(i).repeat(n);
	fs.writeFileSync(arg[3],enStr);
	
	i += n;
	n = 1;
}
console.log('complete');