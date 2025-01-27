import sayHello from '../src/cli.js';
import readlineSync from 'readline-sync';
    const rule = "Answer `yes` if the number is even, otherwise answer `no`."
        const isEvenNum = (num) => num % 2 === 0;
        const getQueAndAnsw = () => {
            const que = Math.floor(Math.random() * 100);
            const answ = isEvenNum(que) ? `yes` : `no`;
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
    const YesOrNo = () => {
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
    }
YesOrNo()

