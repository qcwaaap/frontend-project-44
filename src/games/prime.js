import { getRandomNum } from '../utils.js';
  export const rule = "Answer `yes` if given number is prime. Otherwise answer `no`."
        const getQuestionAndAnswer = () => {
            const randomNum = getRandomNum()
            const que = randomNum;
            // console.log(que)
            const answ = isPrime(randomNum);
            return [que, answ];
        };
    function isPrime (randomNum){ 
       for (let i = 2; i < randomNum; i++){
        if (randomNum % i === 0)
            return `no`;
        }
        return `yes`;
    }
    const calc = () => {
        for (let i=0; i<3; i++){
            const [que, answ] = getQueAndAnsw();
            console.log("Question: " + que)
            const userAnswer = readlineSync.question("Your answer: ");
            if (userAnswer === answ){
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