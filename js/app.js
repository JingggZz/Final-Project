const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestions;
let availableQuestions = [];
let availableOptions = [];

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
        // Add options to available options array
        availableOptions.push(result[i]);
    }
    questionCounter++
}

function next(){
    if(questionCounter === question.length){
        console.log("question over");
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

function getNewOptions(){
    
}

window.onload = function(){
    //set all questions in available question array
    setAvailableQueations();
    
    getNewQuestion();
}