const post_schema = "CREATE TABLE POST("+
	"PostNum INT NOT NULL AUTO_INCREMENT,"+
	" Email VARCHAR(100),"+
	" BlogID INT,"+
	" Archived BOOLEAN,"+
	" Title VARCHAR(150),"+
	" Text LONGTEXT,"+
	" Time TIMESTAMP,"+
	" Date DATE,"+
	" PRIMARY KEY (PostNum),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email),"+
	" FOREIGN KEY(BlogID) REFERENCES BLOG(BlogID))";

exports.post_schema = post_schema;
