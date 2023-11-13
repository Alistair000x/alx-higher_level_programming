#!/usr/bin/node

const languages = ['C', 'Python', 'JavaScript'];
for (const language of languages) {
  let adjective;

  switch (language) {
    case 'C':
      adjective = 'fun';
      break;
    case 'Python':
      adjective = 'cool';
      break;
    case 'JavaScript':
      adjective = 'amazing';
      break;
    default:
      adjective = 'unknown';
  }

  console.log(`${language} is ${adjective}`);
}
