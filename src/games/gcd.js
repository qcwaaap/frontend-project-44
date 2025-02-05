import { getRandomNum } from '../utils.js';

export function NOD(randomNum, randomNum2) {
if(randomNum2 > randomNum){
return NOD(randomNum2, randomNum);
}
if(!randomNum2){
return String(randomNum);
}
return NOD(randomNum2, randomNum % randomNum2);
}
  
export const rule = 'Find the greatest common divisor of given numbers.';
export const getQuestionAndAnswer = () => {
  const randomNum = getRandomNum();
  const randomNum2 = getRandomNum();
  const que = [randomNum, randomNum2].join(' ');
  const answ = NOD(randomNum, randomNum2);
  return [que, answ];
};