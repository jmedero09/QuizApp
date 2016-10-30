$(document).ready(function(){

'use strict'
//Array of question Objects
var questions = [
	
	{
		question:'Who did Rocky fight in Rocky 3?',
		choices:['Apollo Creed','Clubber Lang','Ivan Drago','Tommy Gunn'],
		answer:'Clubber Lang',
		background:'images/one.jpg'
	},
	{
		question:'Which Holiday did Rocky and Adrian have their first date?',
		choices:['Valentines Day','Easter','Christmas','Thanksgiving'],
		answer:'Thanksgiving',
		background:'images/two.jpg'
	},
	{
		question:'What is the name of the gym that Rocky trains at?',
		choices:['Gotham Gym','Church Street Gym','Mighty Micks','The Wild Card'],
		answer:'Mighty Micks',
		background:'images/three.jpg'
	},
	{
		question:'What is the name of Rocky&#39;s Dog?',
		choices:['Butkus','Cuff','Link','Moby Dick'],
		answer:'Butkus',
		background:'images/four.jpg'
	},
	{
		question:'Who Played Apollo Creed?',
		choices:['Charles Woodson','Carl Weathers','Michael B. Jordan','Anthony Mackie'],
		answer:'Carl Weathers',
		background:'images/five.jpg'

	}						

];
//Sets inital question to zero 
var currentQuestion = 0;

//set question number to 1 to let us know which question we are on 
var questionNumber = 1;

//Amount of correct answers will update if answer is correct
var correctAnswer = 0;

//Sets the question, question number,answer choice, and background of page
//will set these as long as the currentQuestion is less than the length of the 
//questions in the questions array 
function generateQuestion(){

	if(currentQuestion < questions.length){

		$('.new').hide();

		$('#question').append(questions[currentQuestion].question);

		$('body').css({'background-image': 'url(' + questions[currentQuestion].background + ')'});

		$('#questionNumber').text('QUESTION '+questionNumber + " of " + questions.length);

		for(var i = 0; i < questions[currentQuestion].choices.length; i++){

		// To dynamically set up the value attribut im concatinating 
		$('ul').append('<li><input type="radio" name="question" value="' + questions[currentQuestion].choices[i] + '"/>' +
			 questions[currentQuestion].choices[i] + '</li>');
		}

	} else{

		//$('#question').append("You Got " + correctAnswer + " out of " + questions.length);
		$('.new').show();
		results(correctAnswer);
	}
}
function validateInput(input){
console.log(input);
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
function results(correctAnswer){

	console.log(correctAnswer);
	if(correctAnswer===0){
		$('body').css('background-image', 'url("images/zero.jpg")');
		$('#question').append("0% really have you even seen one ");
	}
	else if(correctAnswer === 1){

		$('body').css('background-image', 'url("images/twenty.jpg")');
		$('#question').append("20% you are not a real Rocky fan yet ");

	} else if(correctAnswer === 2){

		$('body').css('background-image', 'url("images/forty.jpg")');
		$('#question').append("40% You wish to be a Rock fan ");
	} else if(correctAnswer === 3){
		$('body').css('background-image', 'url("images/sixty.jpg")');
		$('#question').append("60% You're posing as a Rockey fan ");
	}
	else if(correctAnswer === 4){
		$('body').css('background-image', 'url("images/eighty.jpg")');
		$('#question').append("80% You're a rocky fan in training ");
	}
	else{
		$('body').css('background-image', 'url("images/onehundred.jpg")');
		$('#question').append("100% You're a true rocky fan ");
	}
}

$('.new').on('click', function(){
	newGame();
});

$( "input[name='submit']" ).on('click', function(event) {
	event.preventDefault();
 	validateInput($('input[type="radio"]:checked:first').val());

 });
	//This allows the first question to be displayed without having to run through the validate function 
 	generateQuestion();
});