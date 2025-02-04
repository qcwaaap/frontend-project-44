import { getRandomNum } from '../utils.js';
 export const rule = "What number is missing in the progression?"

const createProgression = () => {
    const start = getRandomNum();
    const step = getRandomNum();
    const que = [start];
    for (let i = 1;i <= 9; i++ ){
        que[i] = que[i-1] + step 
    }
    const index = getRandomNum(10)
    const answer = que[index];
    const p = [...que];
    p[index] = '..';
    return [p, answer];
};
    const name = sayHello()
    console.log(rule);
    const next = () => {
        for (let i=0; i<3; i++){
            const [question, rightAnswer] = createProgression();
            console.log(`Question: ${question.join(' ')}`);
            const userAnswer = readlineSync.question("Your answer: ");
            if (+userAnswer === rightAnswer){
            console.log("Correct!")
            }
            else {
                console.log(userAnswer + " is wrong answer ;(. Correct answer was " + rightAnswer + " Let's try again, " + name + "!");
                return
            }
         }
         console.log("Congratulations, " + name + "!");
    }
next()