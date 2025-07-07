select title,descriptions,language_name
from language l
join films f ON l.id_language=f.language_id;