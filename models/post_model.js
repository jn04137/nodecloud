const post_schema = "CREATE TABLE POST("+
	"PostNum INT NOT NULL AUTO_INCREMENT,"+
	" Email VARCHAR(100) NOT NULL,"+
	" BlogID INT NOT NULL,"+
	" Archived BOOLEAN,"+
	" Title VARCHAR(150) NOT NULL,"+
	" Text LONGTEXT NOT NULL,"+
	" Time TIMESTAMP,"+
	" Date DATE,"+
	" PRIMARY KEY (PostNum),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email),"+
	" FOREIGN KEY(BlogID) REFERENCES BLOG(BlogID))";

const tags_schema = "CREATE TABLE TAG("+
	"PostNum INT NOT NULL,"+
	" Tag VARCHAR(32) NOT NULL, "+
	" FOREIGN KEY (PostNum) REFERENCES POST(PostNum))";

exports.post_schema = post_schema;
exports.tags_schema = tags_schema;
