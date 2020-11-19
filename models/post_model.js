const post_schema = "CREATE TABLE POST("+
	"PostNum INT NOT NULL AUTO_INCREMENT UNIQUE,"+
	" Email VARCHAR(100) NOT NULL,"+
	" BlogID INT NOT NULL,"+
	" Title VARCHAR(150) NOT NULL,"+
	" Text LONGTEXT NOT NULL,"+
	" Time TIMESTAMP,"+
	" PRIMARY KEY (PostNum, BlogID, Email),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email) ON DELETE CASCADE,"+
	" FOREIGN KEY(BlogID) REFERENCES BLOG(BlogID) ON DELETE CASCADE)";

exports.post_schema = post_schema;
