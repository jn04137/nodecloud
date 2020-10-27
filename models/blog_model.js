const blog_schema = "CREATE TABLE IF NOT EXISTS BLOG("+
	"BlogID INT(255) NOT NULL UNIQUE,"+
	" BlogName VARCHAR(50),"+
	" Field VARCHAR(255)," +
	" PRIMARY KEY (BlogID))";

exports.blog_schema = blog_schema;
