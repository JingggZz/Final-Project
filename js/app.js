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

    //set options
    // const optionLength = currentQuestions.options.length;
    let result = getRandomOptions(currentQuestions.options, 5);
    
    // create options in
    for(let i =0;i<5;i++){
        const option = document.createElement("div");
        option.innerHTML = result[i];
        option.id=i;
        option.className = "option"
        optionContainer.appendChild(option);

        clear();
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
    for (var i = 0; i < neededElements; i++) {
        var index = Math.floor(Math.random() * sourceArray.length)
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}

function getNewOptions(){
    
}

window.onload = function(){
    //set all questions in available question array
    setAvailableQueations();
    //
    getNewQueation();
}