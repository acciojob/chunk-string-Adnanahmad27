function stringChop(s, size) {
  // your code here
	
	let arr = [];
	if(s===undefined){
        return arr;
      }
	let i=0;
	while(i<s.length){
		arr.push(s.slice(i,i+size));
		i += size;
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
