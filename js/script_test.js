let questions = {
        title: "Autostrada",
        question: "Czy rowerzysta może wjechać na autostradę?",
        image: "img/test1_2.png",
        answer1: "yes",
        answer2: "no",
        hint: "Autostrada - droga dwujezdniowa, oznaczona znakami drogowymi. Mogą po niej jeździć tylko pojazdy samochodowe, ale nie quady.",
    }

    function main() {
        document.getElementById("title").innerHTML = questions.title
        document.getElementById("hint").innerHTML = questions.hint
        document.getElementById("image").src = questions.image
        document.getElementById("question").innerHTML = questions.question
        document.getElementById("answerText1").innerHTML = questions.answer1
        document.getElementById("answerText2").innerHTML = questions.answer2
    }