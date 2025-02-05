import { question } from 'readline-sync';
import { getRandomNum } from '../utils.js';
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
   export const rule = "What is the result of the expression?"
   export  const getQuestionAndAnswer = () => {
            const point = [`+`, `-`, `*`];
            const randomPoint = Math.floor(Math.random()* 3);
            const randomNum = getRandomNum();
            const randomNum2 = getRandomNum();
            const randomOperator = point[randomPoint]
            const question = `${randomNum} ${randomOperator} ${randomNum2}`;
            const answ = String(getCount(randomNum, randomOperator, randomNum2))
            return [question, answ];
        };