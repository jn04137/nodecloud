const user_schema = "CREATE TABLE USER(" + 
	"Email VARCHAR(100) NOT NULL UNIQUE," + 
	" DisplayName VARCHAR(10) NOT NULL," + 
	" Password VARCHAR(150) NOT NULL,"+
	" FirstN VARCHAR(20) NOT NULL,"+
	" MidInitial CHAR,"+
	" LastN VARCHAR(20) NOT NULL,"+
	" PRIMARY KEY (Email))";

exports.user_schema = user_schema;
