const c = document.createElement('canvas');
const autosize = () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
};

autosize();

window.addEventListener('resize', autosize);
document.body.appendChild(c);

let gameState = GameState.WAIT;
let questionIndex = 0;
let correctQuestion = 0;

function update() {
    if (gameState == GameState.WAIT) {
        
        renderWaiting();
    } else if (gameState == GameState.PLAYING) {

        renderPlaying();
    } else if (gameState == GameState.RESULT) {

        renderResult();
    }
}

function renderWaiting() {
    const hude = $hude(c);
    hude
        .fillStyle("black")
        .center().translate(0, -20)
        .font({
            family: "serif",
            size: "36px",
        })
        .text("JavaScript基礎クイズ", "center", "middle")
        .center().translate(0, 20)
        .font({
            family: "serif",
            size: "24px",
        })
        .text("画面をクリックして開始できます", "center", "middle")
        .translate(0, 100)
        .text("キーボードの1,2,3,4で答えてください")
    
}

function renderPlaying() {
    const choices = quiz[questionIndex].choices;

    const hude = $hude(c);
    hude
        .fillStyle("black")
        .center().translate(0, -150)
        .font({
            family: "serif",
            size: "36px",
        })
        .text("問題", "center", "middle")
        .translate(0, 50)
        .font({
            family: "serif",
            size: "24px",
        })
        .text(quiz[questionIndex].question, "center", "middle")
        .textAlign("left")
        .translate(-100, 100)
        .translate(-120, 0)
        .text('1. ' + choices[0])
        .translate(240, 0)
        .text('2. ' + choices[1])
        .translate(-240, 50)
        .text('3. ' + choices[2])
        .translate(240, 0)
        .text('4. ' + choices[3]);
}

function renderResult() {
    const hude = $hude(c); 
    hude
        .fillStyle("black")
        .center()
        .font({
            family: "serif",
            size: "48px",
        })
        .text(quiz.length + "問中、" + correctQuestion + "問正解です。", "center", "middle")
        .translate(0, 50)
        .font({
            family: "serif",
            size: "24px",
        })
        .text("クリックで戻る", "center", "middle");
}

function answer(n) {
    if (quiz[questionIndex].answer == n) {
        correctQuestion++;
    }
    questionIndex++;

    if(questionIndex >= quiz.length) {
        gameState = GameState.RESULT;
    }
}

c.addEventListener('click', e => {
    const b = e.target.getBoundingClientRect();
    const x = e.clientX - b.left;
    const y = e.clientY - b.top;

    if (gameState == GameState.WAIT) {
        gameState = GameState.PLAYING;
    } else if (gameState == GameState.PLAYING) {

    } else if (gameState == GameState.RESULT) {
        questionIndex = 0;
        correctQuestion = 0;

        gameState = GameState.WAIT;
    }
});

window.addEventListener('keydown', e => {
    if(gameState != GameState.PLAYING) return;
    if (e.keyCode >= 49 && e.keyCode <= 52) {
        answer(e.keyCode - 49);
    }
});

(function() {
    update();
    requestAnimationFrame(arguments.callee);
})();