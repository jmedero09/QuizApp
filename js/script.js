$(document).ready(function(){

'use strict'
var questions = [
	
	{
		question:'Who did Rocky fight in Rocky 3',
		choices:['Apollo Creed','Clubber Lang','Ivan Drago','Tommy Gunn'],
		answer:'Clubber Lang'
	},
	{
		question:'Which Holiday did Rocky and Adrian have their first date',
		choices:['Valentines Day','Easter','Christmas','Thankgsgiving'],
		answer:'Thankgsgiving'
	},
	{
		question:'What is the name of the gym that Rocky trains at',
		choices:['Gotham Gym','Church Street Gym','Mighty Micks','The Wild Card'],
		answer:'Mighty Micks'
	},
	{
		question:'What is the name  of Rockys Dog',
		choices:['Butkus','Cuff','Link','Moby Dick'],
		answer:'Butkus'
	},
	{
		question:'Who Played Apollo Creed',
		choices:['Charles Woodson','Carl Weathers','Michael B. Jordan','Anthony Mackie'],
		answer:'Carl Weathers'
	}						

];

var currentQuestion = 0;

var questionNumber = 1;

var correctAnswer = 0;

function display(){
	if(currentQuestion < questions.length){
		$('p').append(questions[currentQuestion].question);

		$('span').text(questionNumber+" of "+questions.length);

		for(var i = 0; i < questions[currentQuestion].choices.length; i++){

		// To dynamically set up the value attribut im concatinating 
		$('ul').append('<li><input type="radio" name="question" value="' + questions[currentQuestion].choices[i] + '"/>' +
			 questions[currentQuestion].choices[i] + '</li>');
		}		
	}
	else{
		$('p').append("You Got "+correctAnswer+"out of "+questions.length);
	}

}

function validateInput(input){
	if(currentQuestion > questions.length){
		currentQuestion = currentQuestion;
		questionNumber = questionNumber;
	}
	else if(input === undefined){
		console.log("dkjdskfjhksjdfhdksj")
		currentQuestion = currentQuestion;
		questionNumber = questionNumber;
	}
	else if(input === questions[currentQuestion].answer){

console.log("nigga we made it");
		currentQuestion++;
		questionNumber++;
		correctAnswer++;
	}
	else{

console.log("awe man");
	
		currentQuestion++;
		questionNumber++;
		

	}
}
 
$( "input[name='submit']" ).on('click', function() {
 	
 	validateInput($('input[type="radio"]:checked:first').val());

console.log($('input[type="radio"]:checked:first').val());
	
	$('ul').empty();

 	$('p').empty();	

 	display();
 });

 	display();











});