function forEach(arr, callback){
	for (var i = 0 ; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

forEach([1, 2, 3], function(x){console.log(2*x);});
