import getRandomNum from '../utils.js';

export const rule = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const start = getRandomNum();
  const step = getRandomNum();
  const progression = [start];
  const progressionLength = 9;
  for (let i = 1; i <= progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const index = getRandomNum(10);
  const answer = String(progression[index]);
  const que = [...progression];
  que[index] = '..';
  return [que.join(' '), answer];
};
