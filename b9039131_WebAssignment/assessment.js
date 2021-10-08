var aAudio = new Audio("music.mp3");

function audio(letter) {
	if(letter == 'music') {
		aAudio.play()
	}
}

function box() {
	if(window.confirm("CONGRATULATIONS, YOU HAVE WON A FREE IPAD CLICK HERE TO CLAIM")){
		window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO";
	};
}

function change() {
	document.getElementById("here").innerHTML = "song: are you bored yet? by the wallows ft clairo";
}


function initMap() {
		var mapOptions = {
			zoom: 14.5,
			center: new google.maps.LatLng(53.3814, -1.4716),
			mapTypeId: 'roadmap'
		};
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var code = {lat:53.3769436,lng:-1.4707913};	
		var marker1 = new google.maps.Marker({position: code,
			map: map,
			title: 'Code'});

		var taco = {lat:53.3794571, lng:-1.4775291};
		var marker2 = new google.maps.Marker({position: taco,
			map: map,
			title: 'Taco Bell'});

		var demp = {lat:53.3743806, lng:-1.4745861};
		var marker3 = new google.maps.Marker({position: demp,
			map: map,
			title: 'Dempseys'});

		var steam = {lat:53.379722, lng:-1.474915};
		var marker4 = new google.maps.Marker({position: steam,
			map: map,
			title: 'Steamyard'});
	}

function submit() {
	document.getElementById("quiz");
	ques1 = parseInt(document.querySelector('input[name ="ques1"]:checked').value)
	ques2 = parseInt(document.querySelector('input[name = "ques2"]:checked').value)

	result = ques1 + ques2;

	document.getElementById("score").innerHTML = result;
}

