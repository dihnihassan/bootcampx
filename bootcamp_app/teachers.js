const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



// pool.query(`
// SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
// FROM assistance_requests
// JOIN teachers ON assistance_requests.teacher_id = teachers.id
// JOIN students ON assistance_requests.student_id = students.id
// JOIN cohorts ON students.cohort_id = cohorts.id
// WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
// ORDER BY teachers.name;
// `)
// .then(res => {
//   res.rows.forEach(row => {
//     console.log(`${row.cohort}: ${row.teacher}`);
//   })
// });




const queryString = `SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`;

const cohortName = process.argv[2] || 'JUL02';
const values = [`${cohortName}`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })  
});  
