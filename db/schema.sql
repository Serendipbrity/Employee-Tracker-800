CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    manager VARCHAR(30) NULL
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL
);

CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    names VARCHAR(30) NOT NULL
);