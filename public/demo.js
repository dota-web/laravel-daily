/*var promise = new Promise(function(resolve, reject) {
	setTimeout(function () {
		var value = {
			success: 1,
			msg: 'ab'
		};
		resolve(value);
	}, 800);
	test('aaa').get();
})*/

/*promise.then(function(value) {
	console.log(value);
	test('aaa').get();
}, function() {
	console.log('error')
});*/
/*var data = []
var test = function (string) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
				
				data.push(string);
				console.log(data)
				if(data.length == 1) {
					resolve(data);
				} else if(data.length == 2) {
					console.log('fail')
					reject(data)
				}
		}, 1000)
	})
};
test('aaa').then(function(value) {
	console.log('success');
	return test('bbb');
},function() {}).then(function a() {}, function b() {
	console.log('error');
})*/
var test = function (id) {
	if(id == 1) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(id);
				console.log(id)
			},3000)
		}); 	
	}
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(id);
			console.log(id)
		},1000)
	}); 
}
var promises = [1,2,3,4].map(function(id) {
	return test(id)
});
Promise.all(promises).then(function(value) {
	console.log('1')
	console.log(value)
})
