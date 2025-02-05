import getRandomNum from '../utils.js';

const isEvenNum = (num) => num % 2 === 0;
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getQuestionAndAnswer = () => {
  const que = getRandomNum();
  const answ = isEvenNum(que) ? 'yes' : 'no';
  return [que, answ];
};
