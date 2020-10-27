const user_schema = "CREATE TABLE IF NOT EXISTS USER(" + 
	"Email VARCHAR(255) NOT NULL UNIQUE," + 
	" DisplayName VARCHAR(255) NOT NULL," + 
	" Password VARCHAR(255) NOT NULL,"+
	" FirstN VARCHAR(255) NOT NULL,"+
	" MidInitial VARCHAR(255),"+
	" LastN VARCHAR(255) NOT NULL,"+
	" Signature VARCHAR(255),"+
	" PostCount INT(25),"+
	" PRIMARY KEY (Email))";

exports.user_schema = user_schema;
