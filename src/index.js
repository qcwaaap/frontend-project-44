import readlineSync from 'readline-sync';
const roundsCount = 3;
const playGame = (rules, getQuestionsAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  
    console.log(rules);
    let correctAnswersCount = 0;
  
    while (correctAnswersCount < roundsCount) {
      const [question, correctAnswer] = getQuestionsAndAnswer();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
  
      if (correctAnswer === userAnswer) {
        console.log('Correct!');
        correctAnswersCount += 1;
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  
  export default playGame;