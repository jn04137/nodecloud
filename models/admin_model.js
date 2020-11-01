const admin_schema = "CREATE TABLE ADMIN("+
	"Email VARCHAR(100) NOT NULL UNIQUE,"+
	" AdminRank INT DEFAULT 1,"+
	" FOREIGN KEY (Email) REFERENCES USER(Email))";

exports.admin_schema = admin_schema;
