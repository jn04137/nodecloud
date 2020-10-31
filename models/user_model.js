const user_schema = "CREATE TABLE IF NOT EXISTS USER(" + 
	"Email VARCHAR(100) NOT NULL UNIQUE," + 
	" DisplayName VARCHAR(10) NOT NULL," + 
	" Password VARCHAR(150) NOT NULL,"+
	" FirstN VARCHAR(20) NOT NULL,"+
	" MidInitial CHAR,"+
	" LastN VARCHAR(20) NOT NULL,"+
	" Signature VARCHAR(255),"+
	" PostCount INT(25),"+
	" PRIMARY KEY (Email))";

exports.user_schema = user_schema;
