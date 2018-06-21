'use strict';
(function(){

	var urlJoke = 'http://api.icndb.com/jokes/random';
	var button = document.getElementById('get-joke');
	var paragraph = document.getElementById('joke');

	getJoke();
	console.log(getJoke());

	button.addEventListener('click', function(){
		getJoke();
	});

	function getJoke() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', urlJoke);
		xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
		});
		xhr.send();
	}


})();