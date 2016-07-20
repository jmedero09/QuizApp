$(document).ready(function(){

'use strict'
var questions=[
	
	{
		question:'Who did Rocky fight in Rocky 3',
		choices:[' Apollo Creed',' Clubber Lang',' Ivan Drago',' Tommy Gunn'],
		answer:' Clubber Lang'
	},
	{
		question:'Which Holiday did Rocky and Adrian have their first date',
		choices:[' Valentines Day',' Easter',' Christmas',' Thankgsgiving'],
		answer:' Thankgsgiving'
	},
	{
		question:'What is the name of the gym that Rocky trains at',
		choices:[' Gotham Gym',' Church Street Gym',' Mighty Micks',' The Wild Card'],
		answer:' Mighty Micks'
	},
	{
		question:'What is the name  of Rockys Dog',
		choices:[' Butkus',' Cuff',' Link',' Moby Dick'],
		answer:' Butkus'
	},
	{
		question:'Who Played Apollo Creed',
		choices:[' Charles Woodson',' Carl Weathers',' Michael B. Jordan',' Anthony Mackie'],
		answer:' Carl Weathers'
	}						

]
var currentQuestion = 0;

function display(){
			
	$('p').append(questions[currentQuestion].question);

	//for(var i = 0; i<questions[currentQuestion].choices.length;i++){

		$('ul').append('<li>'+'<input type="radio" name="question1" value="1" id="quest1">'+
	    '<label for="question1">'+questions[currentQuestion].choices[0]+'</label></li>');

		$('ul').append('<li>'+'<input type="radio" name="question1" value="1" id="quest2">'+
	    '<label for="question1">'+questions[currentQuestion].choices[1]+'</label></li>');

	  	$('ul').append('<li>'+'<input type="radio" name="question1" value="1" id="quest3">'+
	    '<label for="question1">'+questions[currentQuestion].choices[2]+'</label></li>');

	    $('ul').append('<li>'+'<input type="radio" name="question1" value="1" id="quest4">'+
	    '<label for="question1">'+questions[currentQuestion].choices[3]+'</label></li>');

	//}
}
 $( "input[name='submit']" ).on('click',function(){
 	currentQuestion++;
 	console.log(currentQuestion);
 	$('ul').empty();
 	$('p').empty();	
 	display();
 	//alert($("input[name=question1]:checked").val());
 	//questions[currentQuestion].choices[0];
 });

//$('label').append(questions[0].choices[2]);
//console.log(questions[0].choices[2]);
display();










});