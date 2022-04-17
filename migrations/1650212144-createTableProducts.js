exports.up = async (sql) => {
  await sql`
		CREATE TABLE IF NOT EXISTS products (
			id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name varchar(255) NOT NULL,
			price integer NOT NULL,
			type varchar(255) NOT NULL,
			title varchar(255) NOT NULL,
			description varchar(255) NOT NULL
		)
	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE products;
	`;
};
