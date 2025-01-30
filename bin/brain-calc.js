import sayHello from '../src/cli.js';
import readlineSync from 'readline-sync';
const getCount = (randomNum, operator, randomNum2) => {
    switch (operator) {
        case "+":
            return randomNum + randomNum2
        case "*":
            return randomNum * randomNum2
        case "-":
            return randomNum - randomNum2
            default: console.log("Error");
    }
 }
    const rule = "What is the result of the expression?"
        const getQueAndAnsw = () => {
            const point = [`+`, `-`, `*`];
            const randomPoint = Math.floor(Math.random()* 3);
            const randomNum = Math.floor(Math.random() * 100);
            const randomNum2 = Math.floor(Math.random() * 100);
            const randomOperator = point[randomPoint]
            const que = randomNum + randomOperator + randomNum2;
            // console.log(que)
            const answ = getCount(randomNum, randomOperator, randomNum2)
            return [que, answ];
        };
const name = sayHello()
console.log(rule);
    const parity = (userAnswer, answ) => { 
        if (userAnswer == answ){
            return true;
        }
            return false;
    }
    const calc = () => {
        for (let i=0; i<3; i++){
            const [que, answ] = getQueAndAnsw();
            console.log("Question: " + que)
            const userAnswer = readlineSync.question("Your answer: ");
            if (parity(userAnswer, answ)){
            console.log("Correct!")
            }
            else {
                console.log(userAnswer + " is wrong answer ;(. Correct answer was " + answ + " Let's try again, " + name + "!");
                return
            }
         }
         console.log("Congratulations, " + name + "!");
    }
calc()