CREATE TABLE users (
    user_id     INTEGER         AUTO_INCREMENT  PRIMARY KEY,
    email       VARCHAR(255)    UNIQUE          NOT NULL,
    created_at  TIMESTAMP       DEFAULT NOW(),
    updated_at  TIMESTAMP       DEFAULT NOW()   ON UPDATE NOW()
;)



