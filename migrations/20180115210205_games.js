exports.up = function(knex, Promise) {
	return knex.schema.createTable('games', games => {
		games.increments()
		games.string('name')
		games.string('developer')
		games.float('rating', 3, 1)
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('games')
}
