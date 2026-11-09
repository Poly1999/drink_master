DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS glasses CASCADE;
CREATE TABLE glasses(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS ingredients CASCADE;
CREATE TABLE ingredients(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  image_url TEXT NULL,
  is_alcoholic BOOLEAN NOT NULL,
  abv TEXT NULL,
  description TEXT NULL
);

DROP TABLE IF EXISTS drinks CASCADE;
CREATE TABLE drinks(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  short_description TEXT NULL,
  description TEXT NULL,
  instructions TEXT NULL,
  image_url TEXT NULL,
  alcoholic VARCHAR(20) NOT NULL CHECK(alcoholic IN ('Alcoholic' , 'Non alcoholic' , 'Optional alcohol')),
  category_id INTEGER NOT NULL REFERENCES categories(id),
  glass_id INTEGER NOT NULL REFERENCES glasses(id),
  owner_id INTEGER NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


DROP TABLE IF EXISTS drink_ingredients CASCADE;
CREATE TABLE drink_ingredients(
  id SERIAL PRIMARY KEY,
  drink_id INTEGER NOT NULL REFERENCES drinks(id) ON DELETE CASCADE,
  ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
  measure VARCHAR(255) NULL
);

DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE favorites(
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  drink_id INTEGER NOT NULL REFERENCES drinks(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY(user_id, drink_id)
);

DROP TABLE IF EXISTS subscriptions CASCADE;
CREATE TABLE subscriptions(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

