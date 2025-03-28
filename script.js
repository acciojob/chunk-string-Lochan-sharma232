function stringChop(str, size) {
 
let chunks=[];
	let count=0;
	let string="";
	for(let i=0;i<str.length;i++){
	string+=str[i];
		count++;
		if(count==size){
		chunks.push(string);
			count=0;
			string="";
		}
	}
	chunks.push(string);
	return chunks;
// your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
