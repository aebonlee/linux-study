const fs = require('fs');

const files = [
  'D:/linux-study/src/pages/ExamGrade1R1.jsx',
  'D:/linux-study/src/pages/ExamGrade1R2.jsx',
  'D:/linux-study/src/pages/ExamGrade2R1.jsx',
  'D:/linux-study/src/pages/ExamGrade2R2.jsx'
];

for (const file of files) {
  let c = fs.readFileSync(file, 'utf8');
  console.log(file, 'len='+c.length, 'hasCR='+c.includes('\r'));
}
