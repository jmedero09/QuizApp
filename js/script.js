$(document).ready(function(){


var Question = {
	question:"Who did Rocky Fight in Rocky 3",
	option1:"Apollo Creed",
	option2:"Ivan Drago",
	option3:"Tommy Gunwwwwn",
	answer:"Clubber Lang"
};


//$('#answerSelections label').text(Question.option3);



// for(prop in Question){
// 	console.log(prop);
// }

$.each(Question,function(key,val){
	console.log(val);
	$('label').append(val);
})


















});