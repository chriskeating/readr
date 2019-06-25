CREATE TABLE IF NOT EXISTS articles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    link VARCHAR(500) NOT NULL,
    username VARCHAR(50),
    category varchar(100),
    description TEXT,
    upvotes int DEFAULT 0,
    downvotes int DEFAULT 0,
    last_updated TIMESTAMP,
    PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS comments (
    comment_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    text TEXT,
    date_posted DATE,
    article_id INT,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (article_id) REFERENCES articles(id)
)
