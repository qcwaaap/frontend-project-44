import { getRandomNum } from '../utils.js';
  export const rule = "Answer `yes` if given number is prime. Otherwise answer `no`."
    export const getQuestionAndAnswer = () => {
            const randomNum = getRandomNum()
            const que = randomNum;
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