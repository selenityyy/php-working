CREATE DATABASE IF NOT EXISTS selenaca_asa_db;
USE selenaca_asa_db;

-- a photos table to store all the photos
CREATE TABLE photos (
    photo_id INT PRIMARY KEY AUTO_INCREMENT,
    photo_group ENUM('ASA', 'PGA') NOT NULL,
    photo_path VARCHAR(255) NOT NULL
);

-- a table to store all organization members who sign up!
CREATE TABLE members (
    mem_name VARCHAR(100) NOT NULL,
    mem_email VARCHAR(100) UNIQUE NOT NULL,
    mem_year ENUM('Freshman', 'Sophomore', 'Junior', 'Senior') NOT NULL,
    mem_major VARCHAR(100) NOT NULL,
    mem_join_date DATE
);

-- admin table for eBoard members 
-- eBoard can only access the member list
CREATE TABLE admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(50) UNIQUE NOT NULL,
    admin_pass VARCHAR(255) NOT NULL
)