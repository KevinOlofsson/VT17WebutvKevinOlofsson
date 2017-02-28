window.onload = recipeRating();
window.onload = setEventListeners();


var starString1, starString2, starString3, starString4, starString5;
var isClicked = false;


function setEventListeners(){
	var i;
	ratingListeners = document.getElementsByClassName("rating");
	for (i = 0; i < ratingListeners.length; i++) {
		ratingListeners[i].addEventListener("mouseover", mouseHover);
		ratingListeners[i].addEventListener("click", click);
		ratingListeners[i].addEventListener("mouseout", mouseLeave);
	}
}

function mouseHover() {
	var fillStars, i, stringBuilder;

	if (!isClicked) {
	starString1 = document.getElementById("rating1").innerHTML;
	starString2 = document.getElementById("rating2").innerHTML;
	starString3 = document.getElementById("rating3").innerHTML;
	starString4 = document.getElementById("rating4").innerHTML;
	starString5 = document.getElementById("rating5").innerHTML;

		if (this == document.getElementById("rating1")){
			fillStars = 1;
		} else if (this == document.getElementById("rating2")){
			fillStars = 2;
		} else if (this == document.getElementById("rating3")){
			fillStars = 3;
		}else if (this == document.getElementById("rating4")){
			fillStars = 4;
		}else if (this == document.getElementById("rating5")){
			fillStars = 5;
		}

		stringBuilder = "";
		for (i = 1; i <= 5; i++) {
			stringBuilder = "rating" + i;
			if (i <= fillStars){
				document.getElementById(stringBuilder).innerHTML = "&starf;";
			} else {
				document.getElementById(stringBuilder).innerHTML = "&star;";
			}	
		}
	}	
}

function mouseLeave() {
	if (!isClicked) {
		document.getElementById("rating1").innerHTML = starString1;
		document.getElementById("rating2").innerHTML = starString2;
		document.getElementById("rating3").innerHTML = starString3;
		document.getElementById("rating4").innerHTML = starString4;
		document.getElementById("rating5").innerHTML = starString5; 
	}	
}

function click() {
	if (!isClicked) {
		var userVote;
		if (this == document.getElementById("rating1")){
			userVote = 1;
		} else if (this == document.getElementById("rating2")){			
			userVote = 2;
		} else if (this == document.getElementById("rating3")){
			userVote = 3;
		}else if (this == document.getElementById("rating4")){
			userVote = 4;
		}else if (this == document.getElementById("rating5")){
			userVote = 5;
		}

		isClicked = true;
		vote(userVote);
	}
}

function startLoadStars(){
	var str, i;
	str = "";
	for (i = 1; i <= 5; i++) {
		str = "star" + i;
		document.getElementById(str).innerHTML = "&starf;";	
	}
	str = "";
}

function stopLoadStars(){
	var str, i;
	str = "";
	for (i = 1; i <= 5; i++) {
		str = "star" + i;
		document.getElementById(str).innerHTML = "";	
	}
	str = "";
}

function resetRatingPrint(){
	var str, i;
	str = "";
	for (i = 1; i <= 5; i++) {
		str = "rating" + i;
		document.getElementById(str).innerHTML = "";	
	}
	str = "";
}

function vote(userVote){
	var vote, url, xhttp;	
		vote = userVote;
		url= "https://edu.oscarb.se/sjk15/api/recipe/?api_key=685b29da436d03ad&recipe=vaniljbullar&rating=" + vote;
		xhttp = new XMLHttpRequest();		
	    xhttp.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status === 200){
	    	startLoadStars();
			resetRatingPrint();
			recipeRating();
	    	}
	   	}
		xhttp.open("GET", url, true);
		xhttp.send();	
}

function recipeRating(){
	var JSONrecipeRating, xhttp, rating, stars, style, i;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status === 200){
			JSONrecipeRating = JSON.parse(this.responseText);
			stopLoadStars();
			document.getElementById("votes").innerHTML = "Rating " + Math.floor(JSONrecipeRating.rating *100)/100 + " of " + JSONrecipeRating.votes + " votes";			
			rating = JSONrecipeRating.rating;			
			stars = 5;
			style;
			for (i = 1; i <= stars; i++) {
				style = "rating" + i;
				if (i <= Math.round(rating)) {
					document.getElementById(style).innerHTML = "&starf;";
				} else {
					document.getElementById(style).innerHTML = "&star;";
				}
				style = "";		
			}
		}
	}
	xhttp.open("GET", " https://edu.oscarb.se/sjk15/api/recipe/?api_key=685b29da436d03ad&recipe=vaniljbullar", true);
	xhttp.send();
}



