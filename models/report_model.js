const user_report_schema = "CREATE TABLE USER_REPORT("+
    "user_reportID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
    "Serving_admin VARCHAR(100),"+
    "offending_user VARCHAR(100) NOT NULL,"+
    "PRIMARY KEY (user_reportID),"+
    "FOREIGN KEY (Serving_admin) REFERENCES ADMIN(Email), ON DELETE NO ACTION"+
    "FOREIGN KEY (offending_user) REFERENCES USER(Email) ON DELETE NO ACTION)";

const report_schema = "CREATE TABLE REPORT("+
    "reportID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
    "Serving_admin VARCHAR(100), "+
    "offending_post INT NOT NULL, "+
    "offending_user VARCHAR(100) NOT NULL,"+
    "PRIMARY KEY (reportID),"+
    "FOREIGN KEY (Serving_admin) REFERENCES ADMIN(Email) ON DELETE NO ACTION, "+
    "FOREIGN KEY (offending_user) REFERENCES USER(Email) ON DELETE NO ACTION, "+
    "FOREIGN KEY (offending_post) REFERENCES POST(Postnum) ON DELETE NO ACTION)";

exports.report_schema = report_schema;
exports.user_report_schema = user_report_schema;
