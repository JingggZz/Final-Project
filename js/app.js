const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const finishedBox = document.querySelector(".finished-box");
const answerIndicatorContainer = document.querySelector(".answer-indicator");

let questionCounter = 0;
let currentQuestions;
let availableQuestions = [];
let availableOptions = [];
let answers = []; // added variable to store selected answers

//push the queations into availableQueations Array
function setAvailableQueations(){
    const totalQuestion = question.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(question[i]);
    }
}

function getNewQuestion(){
    //set question text(random question)
    const questionIndex = availableQuestions[Math.floor(Math.random()) * availableQuestions.length]
    currentQuestions = questionIndex;
    questionText.innerHTML = currentQuestions.q;

    //get the position of questionIndex from available questions
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the questionIndex from available questions in order to avoid repeat
    availableQuestions.splice(index1,1);

    // Remove previously selected options from the DOM
    optionContainer.innerHTML = "";

    // Reset available options array
    availableOptions = [];
    //set options
    let result = getRandomOptions(currentQuestions.options, 5);
    
    // create options in
    for(let i =0;i<result.length;i++){
        //random option
        const option = document.createElement("div");
        option.innerHTML = result[i];
        option.id=i;
        option.className = "option"
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
        
        // Add options to available options array
        availableOptions.push(result[i]);
    }
    questionCounter++
}

function answerIndicator(){
    const totalQuestion = question.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        indicator.innerHTML = answers[i];
        answerIndicatorContainer.appendChild(indicator);
        
    }

    // show the question text and option container
    questionText.style.display = 'block';
    optionContainer.style.display = 'block';
}

function getResult(optionElement){
    answers.push(optionElement.innerHTML); // add the selected option to the answers array
    console.log(answers);
}


function next(){
    if(questionCounter === question.length){
        answerIndicator();

        // hide question text and option container
        questionText.style.display = 'none';
        optionContainer.style.display = 'none';

    }else{
        getNewQuestion();
    }
}


function getRandomOptions(sourceArray, neededElements) {
    var result = [];

    // Make a copy of the sourceArray to avoid modifying the original one
    var optionsCopy = sourceArray.slice();
    for (var i = 0; i < neededElements; i++) {
        var index = Math.floor(Math.random() * optionsCopy.length)
        result.push(optionsCopy[index]);

        // Remove selected option from the copied array
        optionsCopy.splice(index, 1);
    }
    return result;
}

function get(){
    
}

window.onload = function(){
    //set all questions in available question array
    setAvailableQueations();
    
    getNewQuestion();

    // Add event listener to option container element
    optionContainer.addEventListener('click', function(event) {
    // Check if the clicked element is an option
        if (event.target.classList.contains('option')) {
        // Call next function to load next question
            next();
        }
    });
}