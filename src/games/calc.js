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
            const randomNum = Math.floor(Math.random() * 100);
            const randomNum2 = Math.floor(Math.random() * 100);
            const randomOperator = point[randomPoint]
            const que = randomNum + randomOperator + randomNum2;
            // console.log(que)
            const answ = String(getCount(randomNum, randomOperator, randomNum2))
            return [que, answ];
        };