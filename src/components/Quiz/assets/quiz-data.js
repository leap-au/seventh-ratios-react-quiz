const quizData = {
  title: 'LEAPing into Mathematics: Algebra',
  description:
    'Algebra is a branch of mathematics that deals with variables and the arithmetic operations across these variables. This interactive, multiple-choice quiz is great to test your algebra knowledge in a fun way.  Press START to LEAP into the fun!',
  img: 'leap-orange-navy-brand.png',
  questions: [
    {
      id: 1,
      text: 'Ratios are _______',
      alternatives: [
        {
          id: 1,
          text: 'useless',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'fractions',
          isCorrect: true,
        },
		{
          id: 3,
          text: 'colorful',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'happy',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: 'When ratio = ratio, this is referred to as ________',
      alternatives: [
        {
          id: 1,
          text: 'integer',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'proportion',
          isCorrect: true,
        },        
		{
          id: 3,
          text: 'fraction',
          isCorrect: false,
        },
		        {
          id: 4,
          text: 'number',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'What is the ratio of squares to triangles?',
      img: 'question-example-1.jpg',
      alternatives: [
        {
          id: 1,
          text: '3:2',
          isCorrect: false,
        },
        {
          id: 2,
          text: '2:3',
          isCorrect: false,
        },
        {
          id: 3,
          text: '1:4',
          isCorrect: true,
        },
        {
          id: 4,
          text: '4:1',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: 'A store has 10 doors and 40 windows.  What is the ratio of doors to windows?',
      img: 'question-example.jpg',
      alternatives: [
        {
          id: 1,
          text: '10/40 or 1/4',
          isCorrect: true,
        },
        {
          id: 2,
          text: '40/10 or 4/1',
          isCorrect: false,
        },
      ],
    },
	{
      id: 5,
      text: 'A store has 10 doors and 40 windows.  What is ratio of windows to doors?',
      alternatives: [
        {
          id: 1,
          text: '10/40 or 1/4',
          isCorrect: false,
        },
        {
          id: 2,
          text: '40/10 or 4/1',
          isCorrect: true,
        },
      ],
    },
	{
      id: 6,
      text: 'The ratio 1/2 is proportional to ________',
      alternatives: [
        {
          id: 1,
          text: '1/3',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4/8',
          isCorrect: true,
        },
		{
          id: 3,
          text: '3/4',
          isCorrect: false,
        },
		{
          id: 4,
          text: '2/3',
          isCorrect: false,
        },
      ],
    },
	{
      id: 7,
      text: 'What is the ratio 3:6 proportional to:',
      alternatives: [
        {
          id: 1,
          text: '4:8',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4:12',
          isCorrect: false,
        },
		{
          id: 3,
          text: '6:12',
          isCorrect: true,
        },
		{
          id: 4,
          text: '12:6',
          isCorrect: false,
        },
      ],
    },
	{
      id: 8,
      text: 'Cross multiplication is used to check if a proportion is ________:',
      alternatives: [
        {
          id: 1,
          text: 'long',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'short',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'small',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'true',
          isCorrect: true,
        },
      ],
    },
	{
      id: 9,
      text: 'Use cross multiplication, find x: x/3 = 8/12',
      alternatives: [
        {
          id: 1,
          text: '2',
          isCorrect: true,
        },
        {
          id: 2,
          text: '3',
          isCorrect: false,
        },
		{
          id: 3,
          text: '4',
          isCorrect: false,
        },
		{
          id: 4,
          text: '5',
          isCorrect: false,
        },
      ],
    },
	{
      id: 10,
      text: 'The ratio of boys to girls in a class is 3:2.  If there are 9 boys, find the number of girls.',
      alternatives: [
        {
          id: 1,
          text: '3',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4',
          isCorrect: false,
        },
		{
          id: 3,
          text: '5',
          isCorrect: false,
        },
		{
          id: 4,
          text: '6',
          isCorrect: true,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 6,
      },
      title: 'You only got a few questions right.',
      description:
        'Please restart the Quiz to achieve 70% or higher.',
	  img: 'result-example.jpg',
    },
	{
      id: 2,
      range: {
        from: 7,
        to: 7,
      },
      title: 'Congratulations, you scored 70%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
	{
      id: 3,
      range: {
        from: 8,
        to: 8,
      },
      title: 'Congratulations, you scored 80%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 4,
      range: {
        from: 9,
        to: 9,
      },
      title: 'Congratulations, you scored 90%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 5,
      range: {
        from: 10,
        to: 10,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Please accelerate to the next quiz.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;