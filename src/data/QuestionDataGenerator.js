// QuestionDataGenerator.js

const generateRandomizedQuestions = () => {
    const questions = [
        {
            questionId: 1,
            question: 'Question 1?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Abc',
          },
          {
            questionId: 2,
            question: 'Question 2?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Fbc',
          },
          {
            questionId: 3,
            question: 'Question 3?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Cbc',
          },
          {
            questionId: 4,
            question: 'Question 4?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Jbc',
          },
          {
            questionId: 5,
            question: 'Question 5?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Abc',
          },
          {
            questionId: 6,
            question: 'Question 6?',
            options: ['Kbc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Kbc',
          },
          {
            questionId: 7,
            question: 'Question 7?',
            options: ['Zbc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Dbc',
          },
          {
            questionId: 8,
            question: 'Question 8?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Fbc',
          },
          {
            questionId: 9,
            question: 'Question 9?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Abc',
          },
          {
            questionId: 10,
            question: 'Question 10?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Fbc',
          },
          {
            questionId: 11,
            question: 'Question 11?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Abc',
          },
          {
            questionId: 12,
            question: 'Question 12?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Fbc',
          },
          {
            questionId: 13,
            question: 'Question 13?',
            options: ['Abc', 'Bbc', 'Cbc', 'Dbc'],
            answer : 'Abc',
          },
          {
            questionId: 14,
            question: 'Question 14?',
            options: ['Ebc', 'Fbc', 'Ibc', 'Jbc'],
            answer : 'Fbc',
          },
    ];
  
    // Shuffle the array
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  
    // Slice to get a random subset (e.g., first 10 questions)
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    console.log("Random selectod questions:");
    console.log(selectedQuestions);
  
    return selectedQuestions;
  };
  
  export default generateRandomizedQuestions;
  