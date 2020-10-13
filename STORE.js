const STORE = {
    // 5 or more questions are required
    questions: [
      {
        title: 'What camera setting on a digital camera most affects the amount of visible noise in a photo',
        answers: [
          'Shutter speed',
          'Aperture',
          'ISO',
          'White balance'
        ],
        correctAnswer: 2
      },
      {
        title: 'What function found on a digital SLR would not be found on a film SLR?',
        answers: [
          'Facility to take pictures in rapid succession',
          'ISO/ASA setting',
          'Video',
        ],
        correctAnswer: 2
      },
      {
        title: 'Which of the following is the odd one out?',
        answers: [
          'TIFF',
          'JPEG',
          'RAW',
          'PDF'
        ],
        correctAnswer: 3
      },
      {
        title: 'When does a photographer use the rule of thirds?',
        answers: [
          'Focusing',
          'Composition',
          'Lighting',
        ],
        correctAnswer: 2
      },
      {
        title: 'The aperture of a lens controls the?',
        answers: [
          'Amount of light reaching the sensor',
          'The depth of field of an image',
          'Image sharpness',
          'All the above'
        ],
        correctAnswer: 0
      },
    ],
    score: 0,
    guess: 0,
    quizStarted: false,
    currentQuestion: 0,
    hasFeedback: false,
  };