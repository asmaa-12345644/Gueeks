CREATE TABLE films(
    id_film SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    descriptions TEXT,
    language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language(id_language)
);
