const comment_schema = "CREATE TABLE COMMENT("+
	"CommentID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
	" Email VARCHAR(100) NOT NULL," +
	" PostNum INT NOT NULL," +
	" Content LONGTEXT NOT NULL,"+
	" PRIMARY KEY (CommentID, PostNum, Email),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email), "+
	" FOREIGN KEY (PostNum) REFERENCES POST(PostNum))"

exports.comment_schema = comment_schema;
