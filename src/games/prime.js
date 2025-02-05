import getRandomNum from '../utils.js';

function isPrime(randomNum) {
    if (i < 2){
        return "no"
    }
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) return 'no';
  }
  return 'yes';
}

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getQuestionAndAnswer = () => {
  const randomNum = getRandomNum();
  const que = randomNum;
  const answ = isPrime(randomNum);
  return [que, answ];
};
