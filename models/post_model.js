const post_schema = "CREATE TABLE IF NOT EXISTS POST("+
	"POST# INT(25) NOT NULL UNIQUE,"+
	" Email VARCHAR(255),"+
	" BlogID INT,"+
	" Archived BOOL,"+ 
	" Title VARCHAR(100) NOT NULL,"+
	" Text LONGTEXT,"+
	" Time TIMESTAMP,"+
	" Date DATE,"+
	" PRIMARY KEY (POST#),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email),"+
	" FOREIGN KEY (BlogID) REFERENCES BLOG(BlogID));"

exports.post_schema = post_schema;
