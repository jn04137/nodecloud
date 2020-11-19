const user_report_schema = "CREATE TABLE USER_REPORT("+
    "user_reportID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
    "offending_user VARCHAR(100),"+
    "PRIMARY KEY (user_reportID),"+
    "FOREIGN KEY (offending_user) REFERENCES USER(Email) ON DELETE CASCADE)";

const report_schema = "CREATE TABLE POST_REPORT("+
    "reportID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
    "offending_post INT NOT NULL, "+
    "PRIMARY KEY (reportID),"+
    "FOREIGN KEY (offending_post) REFERENCES POST(Postnum) ON DELETE CASCADE)";

exports.report_schema = report_schema;
exports.user_report_schema = user_report_schema;
