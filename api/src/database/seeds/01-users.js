require('dotenv').config();

const tableName = 'users';

exports.seed = async function (knex){
  await knex(tableName).del();
  const users = Array(10)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        email: `test-${index}@example.com`,
        first_name: `name-${index}`,
        last_name: `lastName-${index}`,
        role: 'user',
      }));

  await knex(tableName).insert(users.map(user => ({ ...user, password: 123 })));
};
