const comment_schema = "CREATE TABLE COMMENT("+
	"CommentID INT AUTO_INCREMENT NOT NULL UNIQUE, "+
	" Email VARCHAR(100) NOT NULL," +
	" PostNum INT NOT NULL," +
	" Content LONGTEXT NOT NULL,"+
	" Time TIMESTAMP," +
	" Date DATE," +
	"PRIMARY KEY (CommentID, PostNum, Email),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email) ON DELETE CASCADE ON UPDATE NO ACTION,"+
	" FOREIGN KEY (PostNum) REFERENCES POST(PostNum) ON DELETE CASCADE ON UPDATE NO ACTION)"

exports.comment_schema = comment_schema;
