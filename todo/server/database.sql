CREATE DATABASE perntodo;

CREATE TABLE todo (
    /*Serial to increase primary key for the uniqueness */
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);