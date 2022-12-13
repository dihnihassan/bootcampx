SELECT AVG(started_at - created_at) as average_wait_time
FROM assistance_requests;


-- My original answer
-- SELECT AVG(started_at - created_at) as average_wait_time
-- FROM assistance_requests JOIN students ON assistance_requests.student_id = students.id
-- JOIN cohorts ON students.cohort_id = cohorts.id
-- GROUP BY cohorts.name
-- ORDER BY average_wait_time DESC
-- LIMIT 1;