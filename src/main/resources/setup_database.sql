-- ============================================================================
-- Asthana Bookstore Modern - Database Setup & Seed Script
-- Architected & Engineered by Aditya Asthana
-- MySQL 8.0+ Compatible
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Table Structure for `books`
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS books (
    barcode VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    author VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 2. Table Structure for `users`
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(100) NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(100) NOT NULL,
    mailid VARCHAR(100) NOT NULL,
    usertype INT NOT NULL COMMENT '1 = Administrator, 2 = Customer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 3. Populate Default User Accounts
-- ----------------------------------------------------------------------------
INSERT INTO users (username, password, firstname, lastname, address, phone, mailid, usertype)
SELECT 'aditya', 'password123', 'Aditya', 'Asthana', 'Tech Park Blvd, India', '9876543210', 'aditya.asthana@example.com', 2
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'aditya');

INSERT INTO users (username, password, firstname, lastname, address, phone, mailid, usertype)
SELECT 'Admin', 'Admin', 'Aditya', 'Admin', 'Asthana HQ, Suite 101', '9584552224521', 'admin@asthana.com', 1
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'Admin');

INSERT INTO users (username, password, firstname, lastname, address, phone, mailid, usertype)
SELECT 'demo', 'demo', 'Demo', 'Explorer', 'Innovation Hub, Silicon City', '42502216225', 'demo@example.com', 2
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'demo');

-- ----------------------------------------------------------------------------
-- 4. Populate Curated 26 Books Catalog (AI, Cloud, Systems, Architecture)
-- ----------------------------------------------------------------------------
INSERT IGNORE INTO books (barcode, name, author, price, quantity) VALUES
('9780131103627', 'The C Programming Language (ANSI C)', 'Brian W. Kernighan & Dennis M. Ritchie', 450, 25),
('9780132181273', 'Domain-Driven Design', 'Eric Evans', 560, 27),
('9780132350884', 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C Martin', 288, 12),
('9780132778046', 'Effective Java', 'Joshua Bloch', 368, 21),
('9780133053036', 'C++ Primer', 'Stanley Lippman, Josée Lajoie & Barbara Moo', 976, 13),
('9780134190563', 'The Go Programming Language', 'Alan A. A. Donovan & Brian W. Kernighan', 400, 18),
('9780134757599', 'Refactoring: Improving the Design of Existing Code', 'Martin Fowler', 940, 14),
('9780137314911', 'Modern Software Engineering', 'David Farley', 680, 17),
('9780262035613', 'Deep Learning', 'Ian Goodfellow, Yoshua Bengio & Aaron Courville', 1350, 15),
('9780316204552', 'The Soul of a New Machine', 'Tracy Kidder', 293, 30),
('9780596517748', 'JavaScript: The Good Parts', 'Douglas Crockford', 420, 22),
('9781098108489', 'Designing Machine Learning Systems', 'Chip Huyen', 920, 18),
('9781484255995', 'Practical Rust Projects', 'Shing Lyu', 257, 15),
('9781491903063', 'Designing Data-Intensive Applications', 'Martin Kleppmann', 1150, 24),
('9781491910740', 'Head First Java', 'Kathy Sierra, Bert Bates & Trisha Gee', 754, 23),
('9781491929124', 'Site Reliability Engineering', 'Betsy Beyer, Chris Jones & Niall Murphy', 1050, 12),
('9781491954249', 'Kubernetes: Up and Running', 'Brendan Burns, Joe Beda & Kelsey Hightower', 790, 15),
('9781492032649', 'Hands-On Machine Learning with Scikit-Learn & TensorFlow', 'Aurélien Géron', 1480, 20),
('9781492050780', 'Building Microservices: Designing Fine-Grained Systems', 'Sam Newman', 890, 16),
('9781492056300', 'Fluent Python', 'Luciano Ramalho', 1014, 15),
('9781492057611', 'Learning SQL: Generate, Manipulate, and Retrieve Data', 'Alan Beaulieu', 540, 19),
('9781617294297', 'Spring in Action, Sixth Edition', 'Craig Walls', 880, 21),
('9781718500457', 'The Rust Programming Language', 'Steve Klabnik & Carol Nichols', 560, 18),
('9781720043997', 'The Road to Learn React', 'Robin Wieruch', 239, 18),
('9781736049112', 'System Design Interview – An Insider\'s Guide', 'Alex Xu', 850, 30),
('9781951204006', 'A Programmer\'s Guide to Computer Science', 'William Springer', 188, 14);

COMMIT;
