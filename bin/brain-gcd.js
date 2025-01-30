import sayHello from '../src/cli.js';
import readlineSync from 'readline-sync';
    const rule = "Find the greatest common divisor of given numbers."
        const getQueAndAnsw = () => {
            const randomNum = Math.floor(Math.random() * 100);
            const randomNum2 = Math.floor(Math.random() * 100);
            const que = [randomNum, randomNum2];
            // console.log(que)
            const answ = NOD(randomNum, randomNum2);
            return [que, answ];
        };
const name = sayHello()
console.log(rule);
    function NOD (randomNum, randomNum2){ 
        if (randomNum2 > randomNum){
            return NOD(randomNum2, randomNum);
        }
	    else if (!randomNum2) {
            return randomNum;
        }
	    else{
            return NOD(randomNum2, randomNum % randomNum2);  
        }  
    }
    const calc = () => {
        for (let i=0; i<3; i++){
            const [que, answ] = getQueAndAnsw();
            console.log("Question: " + `${que[0]} ${que[1]}`)
            const userAnswer = readlineSync.question("Your answer: ");
            if (+userAnswer === answ){
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