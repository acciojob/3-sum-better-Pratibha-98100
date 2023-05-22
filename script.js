function threeSum(arr, target) {

	// let closest = Number.MAX_SAFE_INTEGER;
	// // arr=arr.sort();
	// for (let i = 0; i < arr.length - 2; i++) {
	// 	let sum = arr[i] + arr[i + 1] + arr[i + 2];
	// 	let diff = Math.abs(sum - target);
	// 	if (closest > diff) {
	// 		closest = sum;
	// 	}
	// }
	// return closest;
	// brute force O(n^3)---------------------
	// let closest = Number.MAX_SAFE_INTEGER;
	// let res=0;
	// for(let i=0;i<arr.length-2;i++){
	// 	for(let j=i+1;j<arr.length-1;j++){
	// 		for(let k=j+1;k<arr.length;k++){
    //          let sum=arr[i]+arr[j]+arr[k];
	// 		 let diff=Math.abs(target-sum);
	// 		 if(closest>diff){
	// 			console.log(arr[i],arr[j],arr[k]);
	// 			closest=diff;
	// 		    res=sum;
	// 		 }
	// 		}
	// 	}
	// }

	// O(n^2)------------

	//1- sorting
	arr.sort();
    let closestSum = Number.MAX_SAFE_INTEGER;        // maximum no.
	
	for(let i=0; i<arr.length-2; i++){
		let j=i+1;
		let k=arr.length-1;

		while(j<k){
			let sum=arr[i]+arr[j]+arr[k];
			if(Math.abs(target-sum) < Math.abs(target-closestSum)){
		         closestSum=sum;
			}
			if(sum<target){
				j++;
			}
			else if(sum>target){
				k--;
			}
			else{
				return closestSum;
			}
		}
	}

	return closestSum;
}

module.exports = threeSum;