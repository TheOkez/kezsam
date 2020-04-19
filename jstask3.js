
function pickANumber(num){
	let sam=[];
	for(let i=1;i <= num; i++){
		let kez = "";
		if(i%2==0){
			kez = "yu";
		}
		if(i%3==0){
		kez = (kez =="")?"gi":kez+"-gi";
		}
		if(i%5==0){
		kez = (kez =="")?"oh":kez+"-oh";
		}
		if(kez==""){
			kez = i;
		}
		sam.push(kez);
		
	}
	return sam;
}

pickANumber(100);
pickANumber(10);












