create table person (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50),
	gender VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	country_of_brith VARCHAR(50)
);
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Sheila', 'Bloor', 'sbloor0@baidu.com', 'Polygender', '2001/07/13', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Dar', 'O''Hagirtie', 'dohagirtie1@gmpg.org', 'Polygender', '2004/05/13', 'Peru');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Eugenio', 'Sheriff', 'esheriff2@rediff.com', 'Genderfluid', '1975/04/26', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Pegeen', 'Samsin', null, 'Bigender', '1940/11/10', 'Albania');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Kristal', 'Penright', null, 'Male', '1972/03/24', 'Mauritius');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Myrtia', 'Wookey', 'mwookey5@123-reg.co.uk', 'Bigender', '1953/03/31', 'Russia');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Leonie', 'Tybalt', null, 'Agender', '1978/06/14', 'Indonesia');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Morty', 'Goffe', 'mgoffe7@jiathis.com', 'Agender', '2004/06/19', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Alma', 'Lafrentz', 'alafrentz8@paypal.com', 'Bigender', '1969/11/12', 'Indonesia');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Zebulon', 'Calderwood', null, 'Non-binary', '2007/11/28', 'South Korea');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Sharlene', 'Durnall', null, 'Bigender', '1979/12/09', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Pearla', 'Muress', 'pmuressb@latimes.com', 'Agender', '1999/04/15', 'Philippines');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Irving', 'Rollinson', null, 'Genderfluid', '1965/05/13', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_brith) values ('Alica', 'Banville', null, 'Non-binary', '1965/11/12', 'Nepal');