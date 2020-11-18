const post_schema = "CREATE TABLE POST("+
	"PostNum INT NOT NULL AUTO_INCREMENT UNIQUE,"+
	" Email VARCHAR(100) NOT NULL,"+
	" BlogID INT NOT NULL,"+
	" Archived BOOLEAN,"+
	" Title VARCHAR(150) NOT NULL,"+
	" Text LONGTEXT NOT NULL,"+
	" Time TIMESTAMP,"+
	" PRIMARY KEY (PostNum, BlogID, Email),"+
	" FOREIGN KEY (Email) REFERENCES USER(Email) ON DELETE CASCADE ON UPDATE NO ACTION,"+
	" FOREIGN KEY(BlogID) REFERENCES BLOG(BlogID) ON DELETE CASCADE ON UPDATE NO ACTION)";

const tags_schema = "CREATE TABLE TAG("+
	"PostNum INT NOT NULL,"+
	" Tag VARCHAR(32) NOT NULL, "+
	" FOREIGN KEY (PostNum) REFERENCES POST(PostNum))";

exports.post_schema = post_schema;
exports.tags_schema = tags_schema;
