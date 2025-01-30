import sayHello from '../src/cli.js';
import readlineSync from 'readline-sync';
import { getRandomNum } from '../src/utils.js';
    const rule = "What number is missing in the progression?"
        const progression = () => {
            const start = getRandomNum();
            const step = getRandomNum();
            const que = [start];
            for (let i = 1;i <= 9; i++ ){
                que[i] = que[i-1] + step 
            }
            // console.log(que)
            const answ = ();
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