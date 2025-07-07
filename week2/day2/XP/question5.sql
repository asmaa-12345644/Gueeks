create table customer_review(
     review_id SERIAL PRIMARY KEY,
     film_id INTEGER,
	 FOREIGN KEY (film_id) REFERENCES new_film (id_new_film) ON DELETE CASCADE,
	 language_id INTEGER,
	 FOREIGN KEY (language_id) REFERENCES language (id_language),
	 title VARCHAR(50),
	 score INTEGER check (score >= 1 and score <= 10),
     review_text TEXT,
	 last_update date 
);