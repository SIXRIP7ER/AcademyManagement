-- -- RESET DATABASE

-- \c postgres;

-- DROP DATABASE IF EXISTS academy;

-- CREATE DATABASE academy;

-- \c academy;

-- -- Create Tables

CREATE TABLE Player (
    first_name TEXT,
    last_name TEXT,
    dob DATE,
    pid SERIAL PRIMARY KEY
);

-- Test Insert

INSERT INTO Player VALUES 
('jawad', 'bakhtiari', '2000-02-16')
;

-- -- Refresh Table
-- \c postgres;
-- \c academy;


-- View
-- SELECT * FROM Player;