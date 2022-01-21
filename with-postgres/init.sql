CREATE USER stepzen WITH PASSWORD 'stepzenpasswd';

GRANT ALL PRIVILEGES ON DATABASE stepzen_demo TO stepzen;

CREATE TABLE IF NOT EXISTS "authors" (
  "id" INT NOT NULL UNIQUE,
  "name" varchar(45) NOT NULL,
  "isPseudonym" INT DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "books" (
  "id" INT NOT NULL UNIQUE,
  "name" varchar(45) NOT NULL,
  "originalPublishingDate" DATE NOT NULL,
  "authorID" INT DEFAULT NULL,
  "isbn" varchar(13) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  authors("id", "name", "isPseudonym")
VALUES
  (1, 'Agatha Christie', 0),
  (2, 'Sir Arthur Conan Doyle', 0),
  (3, 'Edgar Allan Poe', 0);

INSERT INTO
  books(
    "id",
    "name",
    "originalPublishingDate",
    "authorID",
    "isbn"
  )
VALUES
  (
    1,
    'Murder on the Orient Express',
    '1934-01-01',
    1,
    '9780671523688'
  ),
  (
    2,
    'The Mysterious Affair at Styles',
    '1920-10-01',
    1,
    '9780812977202'
  ),
  (
    3,
    'The Adventure of the Three Garridebs',
    '1924-10-25',
    2,
    '9788726586343'
  ),
  (
    4,
    'The Murders in the Rue Morge',
    '1841-04-04',
    3,
    '9781407021102'
  );

GRANT ALL PRIVILEGES ON TABLE authors TO stepzen;

GRANT ALL PRIVILEGES ON TABLE books TO stepzen;