const blog_schema = "CREATE TABLE BLOG("+
	"BlogID INT AUTO_INCREMENT NOT NULL UNIQUE,"+
	" BlogName VARCHAR(50) NOT NULL UNIQUE,"+
	" DescField LONGTEXT NOT NULL," +
	" PRIMARY KEY (BlogID))";

exports.blog_schema = blog_schema;
