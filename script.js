function stringChop(str, size) {
 
let new array=[];
	if(!str||len <=0){
		return [];
	}
let chunks=[];
	for(let i=0;i<str.length;i+=len){
	chunks.push(str.substring(i,i+len));
	}
	return chunks;
// your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
