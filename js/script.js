$(document).ready(function(){

'use strict'
var questions = [
	
	{
		question:'Who did Rocky fight in Rocky 3',
		choices:['Apollo Creed','Clubber Lang','Ivan Drago','Tommy Gunn'],
		answer:'Clubber Lang',
		background:'http://sportsmockery.com/wp-content/uploads/2015/03/rocky1_wp_1024x768_1.jpg'
	},
	{
		question:'Which Holiday did Rocky and Adrian have their first date',
		choices:['Valentines Day','Easter','Christmas','Thankgsgiving'],
		answer:'Thankgsgiving',
		background:'http://cdn.moviestillsdb.com/sm/46a54e7de9c94c9c75253ef808e5eb7b/rocky-ii.jpg'
	},
	{
		question:'What is the name of the gym that Rocky trains at',
		choices:['Gotham Gym','Church Street Gym','Mighty Micks','The Wild Card'],
		answer:'Mighty Micks',
		background:'https://i.ytimg.com/vi/QnLlzazuhKY/maxresdefault.jpg'
	},
	{
		question:'What is the name  of Rockys Dog',
		choices:['Butkus','Cuff','Link','Moby Dick'],
		answer:'Butkus',
		background:'http://i11.servimg.com/u/f11/09/00/93/70/rocky413.jpg'
	},
	{
		question:'Who Played Apollo Creed',
		choices:['Charles Woodson','Carl Weathers','Michael B. Jordan','Anthony Mackie'],
		answer:'Carl Weathers',
		background:'http://blacknerdproblems.com/wp-content/uploads/2015/12/Rocky5_WP_1024x768-1024x768.jpg'

	}						

];

var currentQuestion = 0;

var questionNumber = 1;

var correctAnswer = 0;

function generateQuestion(){
	if(currentQuestion < questions.length){

		$('p').append(questions[currentQuestion].question);

		$('section').css({'background-image': 'url(' + questions[currentQuestion].background + ')'});

		$('span').text(questionNumber + " of " + questions.length);

		for(var i = 0; i < questions[currentQuestion].choices.length; i++){

		// To dynamically set up the value attribut im concatinating 
		$('ul').append('<li><input type="radio" name="question" value="' + questions[currentQuestion].choices[i] + '"/>' +
			 questions[currentQuestion].choices[i] + '</li>');
		}

		console.log(questions[currentQuestion].background);		
	} else{

		$('p').append("You Got " + correctAnswer + " out of " + questions.length);
	}
}
function validateInput(input){

	if(currentQuestion > questions.length||input === undefined){//checks if the useer selected a radio button and make sure that he counter does not go out of bounds 

		currentQuestion = currentQuestion;

		questionNumber = questionNumber;

	} else if(input === questions[currentQuestion].answer){//if the answer is correct

		correctAnswer++;

		display();

	} else{
	
		display();
	}
}
function display(){

	$('ul').empty();

 	$('p').empty();	

 	currentQuestion++;

	questionNumber++;

 	generateQuestion();

}
function newGame(){
	currentQuestion = -1;//used negative one to offset the currentQuestion++ in display

	questionNumber = 0;

	correctAnswer = 0;

	display();
}

$('.new').on('click', function(){
	newGame();
});

$( "input[name='submit']" ).on('click', function() {
 	
 	validateInput($('input[type="radio"]:checked:first').val());

 });
	//This allows the first question to be displayed without having to run through the validate function 
 	generateQuestion();
});