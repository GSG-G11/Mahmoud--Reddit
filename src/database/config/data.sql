BEGIN;

DROP TABLE IF EXISTS users, posts , comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
  );

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password) VALUES 
  ('Mahmoud', 'ma@gmail.com', 'Mahmoud@123'), 
  ('Ahmad', 'Ahmad@gmail.com', 'AMahmoud@123');

INSERT INTO posts (title, description, user_id) VALUES 
('Test1', 'Hello1', 1), 
('Test2', 'Hello2', 2), 
('Test3', 'Hello3', 1);

INSERT INTO comments (description, user_id ,post_id) VALUES 
('Test1', 1, 1), 
('Test2', 2, 2), 
('Test3', 2, 1),
('Test4', 1, 3);

COMMIT;