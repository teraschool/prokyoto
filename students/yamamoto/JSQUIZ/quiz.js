const quiz = [
    
    {
        question: "変数の書き方として正しいのはどれ？",
        choices: ["var name = value;", "name = value;", "var name value;", "var = name value;"],
        answer: 0
    },

    {
        question: "ifの意味は？",
        choices: ["そうでない", "または", "もし", "かつ"],
        answer: 2
    },

    {
        question: "functionの意味は？",
        choices: ["変数", "演算", "代入", "関数"],
        answer: 3
    },

    {
        question: "elseの意味は？",
        choices: ["そうでない", "または", "もし", "かつ"],
        answer: 0
    },

    {
        question: "aとbが同じか調べたいときは？",
        choices: ["a is b", "a : b", "a = b", "a == b"],
        answer: 3
    },

    {
        question: "かけ算するときはどうすればいい？",
        choices: ["a $ b", "a * b", "a # b", "a / b"],
        answer: 1
    },

    {
        question: "わり算するときはどうすればいい？",
        choices: ["a * b", "a & b", "a / b", "a $ b"],
        answer: 2
    },

    {
        question: "for(let i = 0; i < 10; i++) console.log(i) の結果は？",
        choices: ["0123456789", "012345678910", "123456789", "12345678910"],
        answer: 0
    },

    {
        question: "配列の作り方は？",
        choices: ["a = ();", "a = [];", "a = {};", "a = <>;"],
        answer: 1
    },

    {
        question: "配列の中を見たいときはどうすればいい？",
        choices: ["a>0", "a{0}", "a.0", "a[0]"],
        answer: 3
    }

];

Object.freeze(quiz);