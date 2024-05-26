use db;
CREATE TABLE signup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
select * from signup;

CREATE TABLE session (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);
SELECT * FROM session;

CREATE TABLE adminLog(
	id INT AUTO_INCREMENT PRIMARY KEY,
    adminname VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

INSERT INTO adminLog (adminname, Password) VALUES
('Admin','Admin@123');

SELECT * FROM adminLog;

CREATE TABLE appointment (
	id INT auto_increment Primary Key,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender CHAR(1) NOT NULL,
    mobNum VARCHAR(15) NOT NULL,
    address VARCHAR(255) NOT NULL
);

SELECT * FROM appointment;
