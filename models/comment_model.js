const comment_schema = "CREATE TABLE COMMENT("+
	"CommentID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
	" Email VARCHAR(100) NOT NULL," +
	" PostNum INT NOT NULL," +
	" Content LONGTEXT NOT NULL,"+
	"PRIMARY KEY (CommentID, PostNum, Email),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email) ON DELETE CASCADE,"+
	" FOREIGN KEY (PostNum) REFERENCES POST(PostNum) ON DELETE CASCADE)"

exports.comment_schema = comment_schema;
