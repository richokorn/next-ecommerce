const products = [
  {
    name: 'cushion',
    price: 1900,
    type: 'single',
    title: 'UPLV Cushion',
    description: `A large cushion to spice up your comfort.`,
  },
  {
    name: 'hoodie-logo',
    price: 3500,
    type: 'single',
    title: 'Logo Style Hoodie',
    description: `A logo styled One-Size-Fits-All hoodie.`,
  },
  {
    name: 'hoodie-college',
    price: 3500,
    type: 'single',
    title: 'College Style Hoodie',
    description: `A college styled One-Size-Fits-All hoodie.`,
  },
  {
    name: 'mug',
    price: 1200,
    type: 'single',
    title: 'Upleveled Coffee Mug',
    description: `Guaranteed to keep your choice of coding fuel extremely fancy.`,
  },
  {
    name: 'sub-karl',
    price: 12000,
    type: 'subscription',
    title: `Karl's Krash Kourse`,
    description: `Need to get up to speed? Schedule up to four 1-hour 1-on-1 sessions a month with Karl Horky.`,
  },
  {
    name: 'sub-jose',
    price: 12000,
    type: 'subscription',
    title: `José's Javascript Jam`,
    description: `Want to learn JavaScript fast? Schedule up to four 1-hour 1-on-1 sessions a month with José Hower.`,
  },
  {
    name: 'stickers',
    price: 800,
    type: 'single',
    title: 'Assorted Coding Stickers. 50pcs.',
    description: `You aren't a "real developer" unless your laptop is more sticker than chassis. Assorted stickers from well known favorites, in this 50 piece sticker set.`,
  },
];

exports.up = async (sql) => {
  await sql`
		INSERT INTO products ${sql(
      products,
      'name',
      'price',
      'type',
      'title',
      'description',
    )}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM products WHERE
			name = ${products.name} AND
			price = ${products.price} AND
			type = ${products.type} AND
			title = ${products.title} AND
			description = ${products.description}
	`;
};
