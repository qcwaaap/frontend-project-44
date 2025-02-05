import { getRandomNum } from '../utils.js';

export const rule = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const start = getRandomNum();
  const step = getRandomNum();
  const que = [start];
  for (let i = 1; i <= 9; i+=1) {
    que[i] = que[i - 1] + step;
  }
  const index = getRandomNum(10);
  const answer = String(que[index]);
  const p = [...que];
  p[index] = '..';
  return [p.join(' '), answer];
};
