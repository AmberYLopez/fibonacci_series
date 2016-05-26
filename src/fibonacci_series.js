'use strict';

function fibonacci_series(n) {
	var arr = [0,1];
	var res = [];
	
	if(n < 2){
		for(var i = 0; i <= n; i++){
			res.push(arr[i]);
			}	
		}
	else{
		for(var j = 2; j <= n; j++){
				arr[j] = arr[j-2]+arr[j-1];
				}
				res = arr;
		}
	return res;
}


module.exports = fibonacci_series;
