-- +goose Up
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(255),
    lastname varchar(255),
    email varchar(255),
    password varchar(255),
    PRIMARY KEY(id)
);

-- +goose Down
DROP TABLE users;