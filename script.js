const quizData = [
    {
        question: "Kepanjangan dari WWW?",
        a: "Word Wide Web",
        b: "Wide Word Web",
        c: "World Wide Web",
        d: "Word With Web",
        correct: "c",
    },
    {
        question: "Kepanjangan dari CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Media komunikasi dan informasi yang berawal dari diciptakannya jaringan komputer adalah?",
        a: "Radio",
        b: "TV",
        c: "Komputer",
        d: "Internet",
        correct: "d",
    },
    {
        question: "Kepanjangan dari HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Internet pada awalnya disebut dengan?",
        a: "Intranet",
        b: "Network",
        c: "Computer network",
        d: "ARPAnet",
        correct: "d",
    },
    {
        question: "Berikut ini yang tidak tergolong Hardware yang dibutuhkan untuk akses internet adalah?",
        a: "CPU",
        b: "Modem",
        c: "Yahoo Messenger",
        d: "RAM",
        correct: "c",
    },
    {
        question: "Panjang total jaringan TCP/IP yang menggunakan protokol IP versi 4 adalah?",
        a: "32-bit",
        b: "8-bit",
        c: "64-bit",
        d: "128-bit",
        correct: "a",
    },
    {
        question: "Metode melakukan usaha yang dapat menghasilkan revenue bagi perusahaan untuk menjamin kelangsungan hidupnya di sebut?",
        a: "EC model",
        b: "Business model",
        c: "Proses model",
        d: "Business case",
        correct: "b",
    },
    {
        question: "Yang merupakan software Enterprise resources planning yaitu?",
        a: "Supply Chain Management (SCM)",
        b: "Customer Relationship Management (CRM)",
        c: "Knowledge Management System (KMS)",
        d: "System Application and Product in data processing (SAP)",
        correct: "d",
    },
    {
        question: "Panjang total jaringan TCP/IP yang menggunakan protokol IP versi 6 adalah?",
        a: "32-bit",
        b: "8-bit",
        c: "64-bit",
        d: "128-bit",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})