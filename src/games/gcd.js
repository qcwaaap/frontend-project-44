import { getRandomNum } from '../utils.js';
   export const rule = "Find the greatest common divisor of given numbers."
      export const getQuestionAndAnswer = () => {
            const randomNum = getRandomNum();
            const randomNum2 = getRandomNum();
            const que = [randomNum, randomNum2];
            const answ = NOD(randomNum, randomNum2);
            return [que, answ];
        };
   export function NOD (randomNum, randomNum2){ 
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