--@block
CREATE TABLE hotkeys(
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    command VARCHAR(255),
    description VARCHAR(255),
    browser INT
);