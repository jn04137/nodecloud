const express = require('express');
const router = express.Router();
const report_controller = require('../controllers/report_controller');

// route: /report/create/post_report
router.post('/create_post_report', report_controller.create_post_report);

// route: /report/get_post_reports
router.get('/get_post_reports', );

// route: /report/create/user_report
router.post('/create_user_report', report_controller.create_user_report);

// route: /report/get_user_reports
router.get('/get_user_reports', );


module.exports = router;
