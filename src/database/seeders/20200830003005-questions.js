'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
    {
      story_id: 1,
      question: 'What is the difference between the approaches of Socrates and Aristotle?',
      option_1: 'Aristotle felt the need for repetition to develop good habits in students; Socrates felt that students need to be constantly questioned',
      option_2: 'Aristotle felt the need for rote-learning; Socrates emphasized on dialogic learning',
      option_3: 'There was no difference',
      option_4: 'Aristotle emphasized on the importance of paying attention to human nature; Socrates emphasized upon science',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'What is the difference between the approaches of Socrates and Aristotle?',
      option_1: 'Aristotle felt the need for repetition to develop good habits in students; Socrates felt that students need to be constantly questioned',
      option_2: 'Aristotle felt the need for rote-learning; Socrates emphasized on dialogic learning',
      option_3: 'There was no difference',
      option_4: 'Aristotle emphasized on the importance of paying attention to human nature; Socrates emphasized upon science',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Why do educationists consider philosophy a ‘weak and woolly’ field?',
      option_1: 'It is not practically applicable',
      option_2: 'Its theoretical concepts are easily understood',
      option_3: 'It is irrelevant for education',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Why do educationists consider philosophy a ‘weak and woolly’ field?',
      option_1: 'It is not practically applicable',
      option_2: 'Its theoretical concepts are easily understood',
      option_3: 'It is irrelevant for education',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'What do you understand by the term ‘Perennialism’, in the context of the given comprehension passage?',
      option_1: 'It refers to something which is of ceaseless importance',
      option_2: 'It refers to something which is quite unnecessary',
      option_3: 'It refers to something which is abstract and theoretical',
      option_4: 'It refers to something which existed in the past and no longer exists now',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'What do you understand by the term ‘Perennialism’, in the context of the given comprehension passage?',
      option_1: 'It refers to something which is of ceaseless importance',
      option_2: 'It refers to something which is quite unnecessary',
      option_3: 'It refers to something which is abstract and theoretical',
      option_4: 'It refers to something which existed in the past and no longer exists now',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Were Plato’s beliefs about education democratic?',
      option_1: 'Yes',
      option_2: 'He believed that only the rich have the right to acquire education',
      option_3: 'He believed that only a select few are meant to attend schools',
      option_4: 'He believed that all pupils are not talented',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Were Plato’s beliefs about education democratic?',
      option_1: 'Yes',
      option_2: 'He believed that only the rich have the right to acquire education',
      option_3: 'He believed that only a select few are meant to attend schools',
      option_4: 'He believed that all pupils are not talented',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Why did Aquinas propose a model of education which did not lay much emphasis on facts?',
      option_1: 'Facts change with the changing times',
      option_2: 'Facts are not important',
      option_3: 'Facts do not lead to holistic education',
      option_4: 'Facts are frozen in time',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 1,
      question: 'Why did Aquinas propose a model of education which did not lay much emphasis on facts?',
      option_1: 'Facts change with the changing times',
      option_2: 'Facts are not important',
      option_3: 'Facts do not lead to holistic education',
      option_4: 'Facts are frozen in time',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What issues does Martin Luther King’s speech address?',
      option_1: 'End to racism and civil and economic rights',
      option_2: 'Continuation of racism',
      option_3: 'Civil rights',
      option_4: 'Civil War',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What issues does Martin Luther King’s speech address?',
      option_1: 'End to racism and civil and economic rights',
      option_2: 'Continuation of racism',
      option_3: 'Civil rights',
      option_4: 'Civil War',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What pushes King to speak: “I have a dream”?',
      option_1: 'He is prompted by Mahalia Jackson',
      option_2: 'He reads out the Emancipation Proclamation',
      option_3: 'He is overwhelmed by the crowd',
      option_4: 'Licoln had asked him to give the speech',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What pushes King to speak: “I have a dream”?',
      option_1: 'He is prompted by Mahalia Jackson',
      option_2: 'He reads out the Emancipation Proclamation',
      option_3: 'He is overwhelmed by the crowd',
      option_4: 'Licoln had asked him to give the speech',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'From the last paragraph, give one word for “to leave”',
      option_1: 'Departed',
      option_2: 'Proclamation',
      option_3: 'Improvised',
      option_4: 'Address',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'From the last paragraph, give one word for “to leave”',
      option_1: 'Departed',
      option_2: 'Proclamation',
      option_3: 'Improvised',
      option_4: 'Address',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What is the name of martin Luther King’s famed speech?',
      option_1: 'The Emancipation Proclamation',
      option_2: 'An Improvisation',
      option_3: 'A Peroration',
      option_4: 'I Have a Dream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'What is the name of martin Luther King’s famed speech?',
      option_1: 'The Emancipation Proclamation',
      option_2: 'An Improvisation',
      option_3: 'A Peroration',
      option_4: 'I Have a Dream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'In front of whom does King speak?',
      option_1: 'The civil rights supporters',
      option_2: 'His friends',
      option_3: 'Lincoln',
      option_4: 'The Negroes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 2,
      question: 'In front of whom does King speak?',
      option_1: 'The civil rights supporters',
      option_2: 'His friends',
      option_3: 'Lincoln',
      option_4: 'The Negroes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'From the first paragraph, give a synonym for "deep"',
      option_1: 'Profound',
      option_2: 'Perspective',
      option_3: 'Tragedy',
      option_4: 'Psychology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'From the first paragraph, give a synonym for "deep"',
      option_1: 'Profound',
      option_2: 'Perspective',
      option_3: 'Tragedy',
      option_4: 'Psychology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'What helped the Indians to conceive of a notion of the Englishmen?',
      option_1: 'Their literature',
      option_2: 'Their advanced weaponry',
      option_3: 'Their orders',
      option_4: 'Their administration',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'What helped the Indians to conceive of a notion of the Englishmen?',
      option_1: 'Their literature',
      option_2: 'Their advanced weaponry',
      option_3: 'Their orders',
      option_4: 'Their administration',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'Who could read and gain from English literature?',
      option_1: 'The educated Indians',
      option_2: 'All the Indians',
      option_3: 'Only writers such as Rabindranath Tagore',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'Who could read and gain from English literature?',
      option_1: 'The educated Indians',
      option_2: 'All the Indians',
      option_3: 'Only writers such as Rabindranath Tagore',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'From the third paragraph, give an antonym for "victorious"',
      option_1: 'Vanquished',
      option_2: 'Victor',
      option_3: 'Belief',
      option_4: 'Persecution',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'From the third paragraph, give an antonym for "victorious"',
      option_1: 'Vanquished',
      option_2: 'Victor',
      option_3: 'Belief',
      option_4: 'Persecution',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'Whose speeches did Tagore listen to, as a boy?',
      option_1: 'John Bright',
      option_2: 'Shakespeare',
      option_3: 'Byron',
      option_4: 'Macaulay',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 3,
      question: 'Whose speeches did Tagore listen to, as a boy?',
      option_1: 'John Bright',
      option_2: 'Shakespeare',
      option_3: 'Byron',
      option_4: 'Macaulay',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'Is is necessary to strike a balance between all the four elements of sportsmanship?',
      option_1: 'Yes',
      option_2: 'No',
      option_3: 'Any 2 can be balanced',
      option_4: 'Only 1 is sufficient',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'Is is necessary to strike a balance between all the four elements of sportsmanship?',
      option_1: 'Yes',
      option_2: 'No',
      option_3: 'Any 2 can be balanced',
      option_4: 'Only 1 is sufficient',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'Why has sportsmanship taken a backseat today?',
      option_1: 'Due to the emphasis on winning',
      option_2: 'Due to lack of balance between the elements',
      option_3: 'Due to drug abuse',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'Why has sportsmanship taken a backseat today?',
      option_1: 'Due to the emphasis on winning',
      option_2: 'Due to lack of balance between the elements',
      option_3: 'Due to drug abuse',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'If one does not accept responsibility for one’s defeat, one is called',
      option_1: 'Sore loser',
      option_2: 'Bad winner',
      option_3: 'Good sportsman',
      option_4: 'Prudent sportsman',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'If one does not accept responsibility for one’s defeat, one is called',
      option_1: 'Sore loser',
      option_2: 'Bad winner',
      option_3: 'Good sportsman',
      option_4: 'Prudent sportsman',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'From the last paragraph, give the opposite of the word "deep"',
      option_1: 'Shallow',
      option_2: 'Competitor',
      option_3: 'Pitch',
      option_4: 'Immature',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'From the last paragraph, give the opposite of the word "deep"',
      option_1: 'Shallow',
      option_2: 'Competitor',
      option_3: 'Pitch',
      option_4: 'Immature',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'When does the spirit of sportsmanship die?',
      option_1: 'When the sportsman becomes too self-centered',
      option_2: 'When the player loses the will to play',
      option_3: 'When the sportsman behaves badly',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 4,
      question: 'When does the spirit of sportsmanship die?',
      option_1: 'When the sportsman becomes too self-centered',
      option_2: 'When the player loses the will to play',
      option_3: 'When the sportsman behaves badly',
      option_4: 'None of the above',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'What do you understand by "freewill"?',
      option_1: 'The choices we make and the things we desire',
      option_2: 'The choices that philosophers force us to make',
      option_3: 'Our perception of temptation',
      option_4: 'Our ego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'What do you understand by "freewill"?',
      option_1: 'The choices we make and the things we desire',
      option_2: 'The choices that philosophers force us to make',
      option_3: 'Our perception of temptation',
      option_4: 'Our ego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'According to Plato, when is true freedom available?',
      option_1: 'When our willpower helps us to overcome our base instincts',
      option_2: 'When there is a struggle between the intellect and the body',
      option_3: 'When we desire that which we cannot achieve',
      option_4: 'When we have no control over our ego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'According to Plato, when is true freedom available?',
      option_1: 'When our willpower helps us to overcome our base instincts',
      option_2: 'When there is a struggle between the intellect and the body',
      option_3: 'When we desire that which we cannot achieve',
      option_4: 'When we have no control over our ego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'In the second paragraph, what does the expression "line up" signify?',
      option_1: 'Align with',
      option_2: 'Disagree with',
      option_3: 'Differ from',
      option_4: 'In discussion with',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'In the second paragraph, what does the expression "line up" signify?',
      option_1: 'Align with',
      option_2: 'Disagree with',
      option_3: 'Differ from',
      option_4: 'In discussion with',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'What is meant by "cognitive capacity"?',
      option_1: 'Our ability to overcome temptation',
      option_2: 'Willpower',
      option_3: 'Our ego',
      option_4: 'The desire to give in to temptation',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'What is meant by "cognitive capacity"?',
      option_1: 'Our ability to overcome temptation',
      option_2: 'Willpower',
      option_3: 'Our ego',
      option_4: 'The desire to give in to temptation',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'From the RC given above, find a synonym for "respected"',
      option_1: 'Desire',
      option_2: 'Cognitive',
      option_3: 'Temptation',
      option_4: 'Revered',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      story_id: 5,
      question: 'From the RC given above, find a synonym for "respected"',
      option_1: 'Desire',
      option_2: 'Cognitive',
      option_3: 'Temptation',
      option_4: 'Revered',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
