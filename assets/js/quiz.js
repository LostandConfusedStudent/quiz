var questions = [
    {question: "Hello", answer: "t"},
    {question: "Hello", answer: "f"},
    {question: "Hello", answer: "t"}
]

for (var i = 0; i < questions.length; i++) {
    var input = confirm(questions[i].question);

    if (input === true && questions[i].answer === "t" ||
    input === false && questions[i].answer === "f") {
        alert("yes");
    } else {
        alert("no");
    }
}

